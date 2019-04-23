
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

import java.util.HashSet;
import java.util.Set;
public class OrderContentEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private int bNum;
    private OrdersEntity orders;
    private BookEntity book;

    public void setbNum(int bNum) {
        this.bNum = bNum;
    }

    public int getId() {
        return id;
    }

    public void setId(int  id) {
        this.id = id;
    }

    public int getbNum() {
        return bNum;
    }

    public OrdersEntity getOrders() {
        return orders;
    }
    public void setOrders(OrdersEntity orders) {
        this.orders = orders;
    }
    public BookEntity getBook() {
        return book;
    }
    public void setBook(BookEntity book) {
        this.book = book;
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
