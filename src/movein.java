
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


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@WebServlet("/cart_movein")
public class movein extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public movein() {
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

            Integer bid= Integer.parseInt(request.getParameter("bid"));

            String hql = "from OrdersEntity o " +
                    " where o.user.id =:uid and o.isCart=1";
            Query query = HibernateUtil.getSessionFactory()
                    .getCurrentSession().createQuery(hql).setInteger("uid", userid);

            List<OrdersEntity> result= query.list();

            Iterator<OrderContentEntity> i = result.get(0).getOrderContent().iterator();//先迭代出来

            while(i.hasNext()){//遍历\
                if(i.next().getBook().getId() == bid)
                {
                    String re="商品已经在购物车里了";
                    out.write(re);
                    out.close();
                    return;
                }
            }
            String bookname = insert(bid,result.get(0).getId());
            String re= bookname +"加入购物车成功";
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
    public String insert(int bid,int oid) {
        //获取Session
        Configuration config = new Configuration();
        SessionFactory factory = config.configure().buildSessionFactory();

        // 所有的操作都是通过sess
        Session session = factory.openSession();
        //获取Hibernate的事务
        Transaction tx = session.beginTransaction();
        OrderContentEntity o =new OrderContentEntity();
        o.setId(0);
        o.setbNum(1);
        List<BookEntity> book_search = HibernateUtil.getSessionFactory()
                .getCurrentSession().createQuery("from BookEntity where id=:i").setInteger("i", bid).list();
        o.setBook(book_search.get(0));
        o.setOid(oid);
        session.save(o);
        //提交事务
        tx.commit();

        session.close();
        return book_search.get(0).getName();
    }
}
