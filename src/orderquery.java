import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
public class orderquery {
    private int id;
    private String date;
    private int bNum;
    private String name;
    private float price;
    private float totPrice;

    public orderquery() { }

    public orderquery(int id, Date date, int bNum, String name, float price,float totPrice) {

        this.id = id;
        SimpleDateFormat sf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        this.date= sf.format(date);
        this.bNum = bNum;
        this.name = name;
        this.price = price;
        this.totPrice= totPrice;
    }
    public int getId()
    {
        return id;
    }
    public  String getDate()
    {
        return date;
    }

    public int getbNum() {
        return bNum;
    }
    public String getName() {
        return name;
    }
    public float getPrice() {
        return price;
    }
    public float getTotPrice() {
        return totPrice;
    }


}