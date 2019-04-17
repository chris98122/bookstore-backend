
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

public class OrderContentEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private Integer bNum;
    private OrdersEntity orders;
    public int getId() {
        return id;
    }

    public void setId(int  id) {
        this.id = id;
    }

    public Integer getbNum() {
        return bNum;
    }

    public void setbNum(Integer bNum) {
        this.bNum = bNum;
    }

    public OrdersEntity getOrders() {
        return orders;
    }
    public void setOrders(OrdersEntity orders) {
        this.orders = orders;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderContentEntity that = (OrderContentEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(bNum, that.bNum);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, bNum);
    }
}
