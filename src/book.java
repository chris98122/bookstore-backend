
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

@WebServlet("/book")
public class book  extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public book() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            // Begin unit of work
            HibernateUtil.getSessionFactory().getCurrentSession().beginTransaction();
            // Write HTML header
            PrintWriter out = response.getWriter();
            out.println("<html><head><title>book</title></head><body>");

            // Print page
            //printUserForm(out);
            listBook(out);

            // Write HTML footer
            out.println("</body></html>");
            out.flush();
            out.close();
            HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();
        }
        catch (Exception ex) {
            HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().rollback();
            if ( ServletException.class.isInstance( ex ) ) {
                throw ( ServletException ) ex;
            }
            else {
                throw new ServletException( ex );
            }
        }
    }

    // 处理 POST 方法请求的方法
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @SuppressWarnings({ "unchecked" })
    private void listBook(PrintWriter out) {
        List<BookEntity> result = HibernateUtil.getSessionFactory()
                .getCurrentSession().createQuery("from BookEntity").list();
        if (result.size() > 0) {
            out.println("<h2>books in database:</h2>");
            out.println("<table border='1'>");
            out.println("<tr>");
            out.println("<th>id</th>");
            out.println("<th>bookname</th>");
            out.println("<th>author</th>");
            out.println("<th>ISBN</th>");
            out.println("<th>stock</th>");
            out.println("</tr>");
            Iterator it = result.iterator();
            while (it.hasNext()) {
                BookEntity b = ( BookEntity) it.next();
                out.println("<tr>");
                out.println("<td>" + b.getName() + "</td>");
                out.println("<td>" + b.getAuthor() + "</td>");
                out.println("<td>" + b.getStock() + "</td>");
                out.println("</tr>");
            }
            out.println("</table>");
        }

    }
}