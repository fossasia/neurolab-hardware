import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.JTextPane;
import javax.swing.border.EmptyBorder;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import java.awt.Color;

public class RESTExample extends JFrame {

	private JPanel contentPane;
	private JTextField textField;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					RESTExample frame = new RESTExample();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public RESTExample() {
		JTextPane txtpnresult = new JTextPane();
		txtpnresult.setForeground(Color.ORANGE);
		txtpnresult.setBackground(new Color(51, 51, 51));
		txtpnresult.setEditable(false);
		
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		setResizable(false);
		contentPane = new JPanel();
		contentPane.setBackground(Color.DARK_GRAY);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(new BorderLayout(0, 0));
		
		JPanel panel_1 = new JPanel();
		panel_1.setBackground(Color.DARK_GRAY);
		contentPane.add(panel_1, BorderLayout.NORTH);
		
		JLabel lblUserId = new JLabel("User ID:");
		lblUserId.setForeground(Color.WHITE);
		panel_1.add(lblUserId);
		
		textField = new JTextField();
		panel_1.add(textField);
		textField.setColumns(10);
		
		JButton btnFind = new JButton("Find");
		btnFind.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				String value = textField.getText();
				
				if (isInteger (value)) {
					int id = Integer.parseInt(value);
					if (id > 0 && id <= 100) {
						String response;
						try {
							response = httpGET ("http://jsonplaceholder.typicode.com/posts/" + id);
							JSONParser parser = new JSONParser();
							JSONObject obj = (JSONObject) parser.parse(response);
							txtpnresult.setText(String.format("<br />"
									+ "<b color=\"orange\">User Id: </b><font color=\"white\">%d</font><br /><br />"
									+ "<b color=\"orange\">Id: </b><font color=\"white\">%d</font><br /><br />"
									+ "<b color=\"orange\">Title: </b><font color=\"white\">%s</font><br /><br />"
									+ "<b color=\"orange\">Body: </b><font color=\"white\">%s</font><br /><br />", obj.get("userId"), obj.get("id"), obj.get("title"), obj.get("body")));
							return;
						} catch (Exception e1) {
							txtpnresult.setText("<br /><font color=\"white\">Failed to find User. Sorry :P</font>");
							return;
						}
					} else { txtpnresult.setText("<br /><font color=\"white\">User Id must be between 0 (exclusive) and 100 (inclusive).</font>"); return; }
				} else { txtpnresult.setText("<br /><font color=\"white\">User Id must be a number.</font>"); return; }
			}
		});
		panel_1.add(btnFind);
		
		JPanel panel = new JPanel();
		panel_1.add(panel);
		panel.setLayout(new BorderLayout(0, 0));
		contentPane.add(txtpnresult, BorderLayout.CENTER);
		
		txtpnresult.setContentType("text/html");
		txtpnresult.setText("<br /><b color=\"white\">Enter a User Id and Click Find</b>");
	}

	public static String httpGET(String urlToRead) throws Exception {
	      StringBuilder result = new StringBuilder();
	      URL url = new URL(urlToRead);
	      HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	      conn.setRequestMethod("GET");
	      BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	      String line;
	      while ((line = rd.readLine()) != null) {
	         result.append(line);
	      }
	      rd.close();
	      return result.toString();
	   }
	
	public static boolean isInteger(String s) {
	    try { 
	        Integer.parseInt(s); 
	    } catch(NumberFormatException e) { 
	        return false; 
	    } catch(NullPointerException e) {
	        return false;
	    }
	    // only got here if we didn't return false
	    return true;
	}
}
