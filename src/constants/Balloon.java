package constants;

/**
 * CLogin::BALLOON
 *
 * @author Eric
 */
public class Balloon {

    public int nX, nY;
    public String sMessage;

    public Balloon(String sMessage, int nX, int nY) {
        this.sMessage = sMessage;
        this.nX = nX;
        this.nY = nY;
    }
}
