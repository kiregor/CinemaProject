package payment;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.checkout.Session;

public class TestingPayment {
	
//	public static void main(String[] args) throws StripeException {
//		new TestingPayment();
//	}
	
	
	
	public TestingPayment(@Value("$(stripeKey)") final String key) throws StripeException {
		// Set your secret key: remember to change this to your live secret key in production
		// See your keys here: https://dashboard.stripe.com/account/apikeys
		Stripe.apiKey = key;

		Map<String, Object> params = new HashMap<String, Object>();

		ArrayList<String> paymentMethodTypes = new ArrayList<>();
		paymentMethodTypes.add("card");
		params.put("payment_method_types", paymentMethodTypes);

		ArrayList<HashMap<String, Object>> lineItems = new ArrayList<>();
		HashMap<String, Object> lineItem = new HashMap<String, Object>();
		lineItem.put("name", "T-shirt");
		lineItem.put("description", "Comfortable cotton t-shirt");
		lineItem.put("amount", 500);
		lineItem.put("currency", "usd");
		lineItem.put("quantity", 1);
		lineItems.add(lineItem);
		params.put("line_items", lineItems);

		params.put("success_url", "https://example.com/success");
		params.put("cancel_url", "https://example.com/cancel");

		Session session = Session.create(params);
		
		System.out.println(session.toString());
	}
	
	
}
