
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
import java.util.*;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import com.alibaba.fastjson.serializer.SerializerFeature;
import org.hibernate.query.Query;


@WebServlet("/orders_show")
public class order  extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public order() {
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
            HttpSession session = request.getSession();
                if(session.getAttribute("userid") == null)
                {
                    out.write("用户未登录");
                    out.close();
                    return;

            }


            int userid = (int) session.getAttribute("userid");
            String hql = "from OrdersEntity o " +
                    " where o.user.id =:uid and o.isCart=0";
            Query query = HibernateUtil.getSessionFactory()
                    .getCurrentSession().createQuery(hql).setInteger("uid", userid);
            List<OrdersEntity> result= query.list();


                String re= JSON.toJSONString(result,SerializerFeature.PrettyFormat,
                        SerializerFeature.WriteMapNullValue, SerializerFeature.WriteNullStringAsEmpty,
                        SerializerFeature.DisableCircularReferenceDetect,
                        SerializerFeature.WriteNullListAsEmpty);
                out.write(re);

            out.close();
            HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();
        } catch (Exception ex) {
            HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().rollback();
            if (ServletException.class.isInstance(ex)) {
                throw (ServletException) ex;
            } else {
                throw new ServletException(ex);
            }
        }
    }
}