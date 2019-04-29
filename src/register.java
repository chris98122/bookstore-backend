
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import java.util.Date;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.HashSet;

import java.util.Set;
@WebServlet("/register")
public class register  extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public register() {
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

            String name = request.getParameter("name");
            String password=request.getParameter("password");
            String email=request.getParameter("email");
            UserEntity user = new UserEntity();
            user.setId(0);
            user.setName(name);
            user.setPassword(password);
            user.setEmail(email);
            Byte a=1;
            user.setIsActive(a);

            //通过实例化的user对象插入数据
            UserOperator uo = new UserOperator();
            uo.UserInsert(user);

            OrderOperator o =new OrderOperator();
            OrdersEntity cart = new OrdersEntity();
            cart.setId(0);
            cart.setUser(user);
            Set<OrderContentEntity> ordercontent = new HashSet<>(0);
            cart.setOrdercontent(ordercontent);
            Date date = new Date();
            cart.setDate(date);
            Byte iscart = 1;
            cart.setIsCart(iscart);
            cart.setTotPrice(0);
            o.OrderInsert(cart);

            out.write("注册成功");

            HttpSession session = request.getSession();
            session.setAttribute("username", name);
            session.setAttribute("userid", user.getId());

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