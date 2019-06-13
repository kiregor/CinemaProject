package stripe;

import java.util.HashMap;
import java.util.Map;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

public class ChargePayment {
	
	
	public void makePayment(String token, String key,int cost) throws StripeException {
	
		Stripe.apiKey = key;
		Map<String, Object> chargeParams = new HashMap<String, Object>();
		chargeParams.put("amount", cost*100);
		chargeParams.put("currency", "gbp");
		chargeParams.put("source", token);

		Charge charge = Charge.create(chargeParams);
	}
}
