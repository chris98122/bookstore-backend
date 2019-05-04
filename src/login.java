
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.servlet.http.HttpSession;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

@WebServlet("/login")
public class login  extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public login() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }

    // 处理 POST 方法请求的方法
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            // Begin unit of work
            HibernateUtil.getSessionFactory().getCurrentSession().beginTransaction();
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            request.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();

            String qname = request.getParameter("name");
            String password=request.getParameter("password");

            //Map<String, String> loginUserMap = new HashMap<>();

            String hql = "FROM UserEntity where name =:n";
            Query query = HibernateUtil.getSessionFactory()
                    .getCurrentSession().createQuery(hql).setString("n",qname);


            List<UserEntity> result = query.list();
            if(result.get(0).getPassword().equals(password)) {
                HttpSession session = request.getSession();
                int userid=result.get(0).getId();
                String username=result.get(0).getName();
                session.setAttribute("username", username);
                session.setAttribute("userid", userid);
                String sessionId = session.getId();
                    //判断session是不是新创建的

                if(userid == 1)
                {
                    session.setAttribute("isAdmin",true);
                    out.write("管理员登录成功");
                }
                else
                {
                    Byte a = 0;
                    if(result.get(0).getIsActive() == a)
                        out.write("您被禁止登录");
                    else {
                        session.setAttribute("isAdmin", false);
                        out.write("用户登录成功");
                    }
                }
            }
            out.close();
            HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();
        }
        catch (Exception ex) {
            HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().rollback();
            if ( ServletException.class.isInstance( ex ) ) {
                throw ( ServletException ) ex;
            }
            else {
                throw new ServletException( ex );
            }
        }
    }


}