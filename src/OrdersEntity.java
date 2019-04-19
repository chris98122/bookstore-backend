
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Objects;

import java.util.HashSet;

import java.util.Set;
public class OrdersEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String date;
    private float totPrice;
    private Byte isCart;

    private UserEntity user;

    private Set<OrderContentEntity> ordercontent=new HashSet<>(0);

    public  UserEntity getUser() {
        return  user;
    }
    public void setUser(UserEntity user) {
        this.user = user;
    }


    public Set<OrderContentEntity> getOrdercontent() {
        return ordercontent;
    }

    public void setOrdercontent(Set<OrderContentEntity> ordercontent) {
        this.ordercontent = ordercontent;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String  getDate() {
        return date;
    }

    public void setDate(String  date) {
        this.date = date;
    }

    public float getTotPrice() {
        return totPrice;
    }

    public void setTotPrice(float totPrice) {
        this.totPrice = totPrice;
    }

    public Byte getIsCart() {
        return isCart;
    }

    public void setIsCart(Byte isCart) {
        this.isCart = isCart;
    }

    public Set<OrderContentEntity> getOrderContent() {
        return ordercontent;
    }
    public void setOrderContent(Set<OrderContentEntity> ordercontent) {
        this.ordercontent = ordercontent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrdersEntity that = (OrdersEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(date, that.date) &&
                Objects.equals(totPrice, that.totPrice) &&
                Objects.equals(isCart, that.isCart);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, totPrice, isCart);
    }
}
