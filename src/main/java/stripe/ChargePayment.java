package stripe;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

public class ChargePayment {
	
	public void makePayment(@Value("${stripeKey}") String key,String token) throws StripeException {
		Stripe.apiKey = key;
		Map<String, Object> chargeParams = new HashMap<String, Object>();
		chargeParams.put("amount", 1000);
		chargeParams.put("currency", "gbp");
		chargeParams.put("source", token);

		Charge charge = Charge.create(chargeParams);
		System.out.println(charge);
	}
}
