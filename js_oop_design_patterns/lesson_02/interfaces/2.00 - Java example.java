/* Java Interface */

public interface Account {
	void deposit(double value) throws IOException;
	void withdraw(double value) throws IOException;
}

/* Java Class */

public class Accountable implements Account {

	private double balance;

	public final void deposit (double depositValue) throws IOException {
    	this.balance += depositValue;
    }
	public final void withdraw (double withdrawValue) throws IOException {
    	this.balance -= withdrawValue;
    }
}