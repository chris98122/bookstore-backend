
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
import org.hibernate.query.Query;

@WebServlet("/orders")
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
            String userid = (String) session.getAttribute("userid");



            String hql = "FROM OrdersEntity where u_ID =:i";
            Query query = HibernateUtil.getSessionFactory()
                    .getCurrentSession().createQuery(hql).setString("i",userid);
            List<OrdersEntity> result = query.list();

            Iterator<OrdersEntity> iter = result.iterator();
            while(iter.hasNext()) {
                OrdersEntity q=iter.next();
                int id = q.getId();
                String hql_content = "FROM OrderContentEntity where o_ID =:o";
                Query query_content = HibernateUtil.getSessionFactory()
                        .getCurrentSession().createQuery(hql_content).setString("o",userid);
                //选出了同一个订单下的content
                List<OrderContentEntity> order_content = query_content.list();
                Iterator<OrderContentEntity> iter_cnt = order_content.iterator();
                //一个content只有一种书
                while(iter_cnt.hasNext()) {
                    //选出了同一个订单下的所有书o_ID  b_ID		b_num
                    String hql_book = "FROM BookEntity where b_ID =:b";;
                   // int bookid=;//还没有写getbid
                    Query query_book = HibernateUtil.getSessionFactory()
                            .getCurrentSession().createQuery(hql_content).setString("b", bookid);
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