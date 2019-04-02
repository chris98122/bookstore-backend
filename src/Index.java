import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.io.PrintWriter;

/**
 * Servlet implementation class HelloForm
 */
@WebServlet("/Index")
public class  Index extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public Index() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 设置响应内容类型
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>\n" +
                "<html>\n" +
                "        <head>\n" +
                "\n" +
                "                <link rel=\"stylesheet\" type=\"text/css\" href=\"./static/css/initial.css\">\n" +
                "                <link rel=\"stylesheet\" type=\"text/css\" href=\"./static/css/bar.css\">\n" +
                "                <link rel=\"stylesheet\" type=\"text/css\" href=\"./static/css/browse_book.css\">\n" +
                "        </head>\n" +
                "<meta charset=\"UTF-8\" />\n" +
                "<body style=\"padding-bottom: 82px\"> \n" +
                "        <div class=\"bar_border\">\n" +
                "            <ul class = \"bar\">\n" +
                "                    <li>\n" +
                "                            <a href=\"./index.html\">回到主页</a>\n" +
                "                    </li>\n" +
                "                    </ul>\n" +
                "        </div>\n" +
                "\n" +
                "        <div class=\"browse_border\">  \n" +
                "                <div class=\"browse_border\">  \n" +
                "                <ul class=\"browse_title\" >\n" +
                "                        <li class=\"f2\">书名</li>\n" +
                "                        <li class=\"f3\">作者</li>\n" +
                "                        <li class=\"f4\">库存</li>\n" +
                "                        <li class=\"f5\">ISBN</li>\n" +
                "                        <li class=\"f6\">加入购物车</li>\n" +
                "                </ul>\n" +
                "        <table class=\"book_list\">\n" +
                "                <tbody> \n" +
                "            <tr>\n" +
                "                <td class=\"row_name\">\n" +
                "                    <div class=\"name\">\n" +
                "\n" +
                "                              javascript语言精粹\n" +
                "                      </div>\n" +
                "               </td>\n" +
                "             <td class=\"row3\">\n" +
                "                      <span>Douglas Crockford </span>\n" +
                "            </td>\n" +
                "            <td data-minbuy=\"0\" class=\"fn-count-tip row4 \">\n" +
                "                            <span class=\"amount fn-updatecount \" data-value=\"3\">\n" +
                "                            <p>3</p>\n" +
                "                             </span>\n" +
                "            <td class=\"row5\">\n" +
                "                    <span > 9787121084379</span>\n" +
                "            </td>\n" +
                "            <td class=\"row6\">\n" +
                "                        <button>加入购物车</button>\n" +
                "                </td>\n" +
                "             </tr>\n" +
                "     </tbody>\n" +
                "    </table>\n" +
                "        </div>\n" +
                "\n" +
                "\n" +
                "        <div class=\"next\">\n" +
                "        <a id=\"next_page\" href=\"\">下一页</a>\n" +
                "        </div>\n" +
                "        </body>\n" +
                "</html>");
    }

// 处理 POST 方法请求的方法
public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
        }
        }