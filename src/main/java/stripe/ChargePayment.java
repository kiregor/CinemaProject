package stripe;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import com.qa.CinemaProject.entities.Booking;
import com.stripe.Stripe;
import com.stripe.exception.CardException;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

public class ChargePayment {
	
	private String statusCode;
	
	public void makePayment(String token, String key,int cost) {
		try {
			Stripe.apiKey = key;
			Map<String, Object> chargeParams = new HashMap<String, Object>();
			Charge charge;
			chargeParams.put("amount", cost*100);
			chargeParams.put("currency", "gbp");
			chargeParams.put("source", token);
			charge = Charge.create(chargeParams);
			statusCode = "success";
		}catch(CardException card) {
			System.out.println(card.getDeclineCode());
			if(card.getDeclineCode().equals("insufficient_funds")) {
				System.out.println("********You DON'T have enough money in your account to make this transaction*******");
				statusCode = "fail";
			}
		}catch (StripeException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}
	
	public String getStatus() {
		return statusCode;
	}
} 
