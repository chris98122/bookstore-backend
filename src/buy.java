
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


import java.util.HashSet;

import java.util.Set;

@WebServlet("/cart_buy")
public class buy extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public buy() {
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
            int userid = (int) session.getAttribute("userid");

            String tot_price =  request.getParameter("totprice");

            String item = request.getParameter("item");
            List<BuyContent> buylist = new ArrayList<BuyContent>();
            List<OrderContentEntity > list_order = new ArrayList<OrderContentEntity>();
            buylist =  JSONObject.parseArray(item, BuyContent.class);

            //contentset
            Set<OrderContentEntity> content_set=new HashSet<>();

            OrdersEntity order_insert = new OrdersEntity();
            OrderContentEntity ordercontent[];
            ordercontent = new OrderContentEntity[buylist.size()];
            for (int i = 0; i < buylist.size(); i++) {
                ordercontent [i]=new OrderContentEntity();
            }
            for (int i = 0; i < buylist.size(); i++) {
                  int id = buylist.get(i).getId();
                  int bnum = buylist.get(i).getBnum();
                  float price = buylist.get(i).getPrice();
                  ordercontent[i].setbNum(bnum);
                ordercontent[i].setId(0);
                ordercontent[i].setOrders(order_insert);

                List<BookEntity> book_search = HibernateUtil.getSessionFactory()
                     .getCurrentSession().createQuery("from BookEntity where id=:i").setInteger("i", id).list();

                ordercontent[i].setBook(book_search.get(0));

                order_insert.getOrderContent().add(ordercontent[i]);
                order_insert.getOrdercontent().add(ordercontent[i]);
         }

            order_insert.setId(0);
            Date date = new Date();
            order_insert.setDate(date);

            Byte a = 0;
            order_insert.setIsCart(a);
            order_insert.setTotPrice(Integer.parseInt(tot_price));

            List<UserEntity> user_search = HibernateUtil.getSessionFactory()
                    .getCurrentSession().createQuery("from UserEntity where  id=:i").setInteger("i", userid).list();
            order_insert.setUser(user_search.get(0));

            for (int i = 0; i < buylist.size(); i++) {
                ordercontent[i].setOrders(order_insert);
            }



            OrderOperator o = new OrderOperator();

            //o.OrderInsert(ordercontent[0]);
            o.OrderInsert(order_insert);
            //o.OrderInsert( user_search.get(0));


                int orderid = order_insert.getId();


                String re = "下单成功，订单号" + Integer.toString(orderid);

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