
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
    private Integer bNum;
    private OrdersEntity orders;
    private int bid;
    private BookEntity book;//单向一对一 ordercontent->book


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


    public int getBid() {
        return bid;
    }

    public void setBid(int  id) {
        this.bid = bid;
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
                Objects.equals(bNum, that.bNum)&&
                Objects.equals(bid, that.bid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, bNum);
    }
}
