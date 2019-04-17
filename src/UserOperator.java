

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class UserOperator {
    private Session session = null;

    public UserOperator() {
        Configuration config = new Configuration();
        SessionFactory factory = config.configure().buildSessionFactory();
        this.session = factory.openSession();
    }

    // 所有的操作都是通过session来完成的
    public void UserInsert(UserEntity p) {
        Transaction tran = this.session.beginTransaction();//开始事物
        this.session.save(p);//执行
        tran.commit();//提交
    }
}