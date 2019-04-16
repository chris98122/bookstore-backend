
import java.util.Objects;

public class OrderContentEntity {
    private String id;
    private Integer bNum;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getbNum() {
        return bNum;
    }

    public void setbNum(Integer bNum) {
        this.bNum = bNum;
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
