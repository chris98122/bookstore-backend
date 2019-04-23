

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;


public class OrderOperator {
    private Session session = null;

    public OrderOperator() {
        Configuration config = new Configuration();
        SessionFactory factory = config.configure().buildSessionFactory();
        this.session = factory.openSession();
    }

    // 所有的操作都是通过session来完成的
    public void OrderInsert(OrdersEntity p) {
       try{ Transaction tran = this.session.beginTransaction();//开始事物
        this.session.save(p);//执行
        tran.commit();//提交
    } catch (Exception ex) {
           throw   ex;
       }
    }
    public void OrderInsert(OrderContentEntity p) {
        try {
            Transaction tran = this.session.beginTransaction();//开始事物
            this.session.save(p);//执行
            tran.commit();//提交
        } catch (Exception ex) {
            throw ex;
        }
    }
        public void OrderInsert(UserEntity p) {
            try{ Transaction tran = this.session.beginTransaction();//开始事物
                this.session.save(p);//执行
                tran.commit();//提交
            }
            catch (Exception ex) {
                HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().rollback();
                throw   ex;

            }
            }

}