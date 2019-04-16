
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

public class OrdersEntity {
    private String id;
    private Timestamp date;
    private BigDecimal totPrice;
    private Byte isCart;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public BigDecimal getTotPrice() {
        return totPrice;
    }

    public void setTotPrice(BigDecimal totPrice) {
        this.totPrice = totPrice;
    }

    public Byte getIsCart() {
        return isCart;
    }

    public void setIsCart(Byte isCart) {
        this.isCart = isCart;
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
