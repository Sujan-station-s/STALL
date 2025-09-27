import { useState } from "react";
import { CreditCard, Smartphone, Copy, Check, QrCode } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/contexts/CartContext";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalAmount: number;
  items: CartItem[];
}

const UPI_ID = "8317445877@upi";

export default function CheckoutDialog({ open, onOpenChange, totalAmount, items }: CheckoutDialogProps) {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'qr'>('upi');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { clearCart } = useCart();

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      toast({
        title: "UPI ID copied!",
        description: "You can now paste it in your UPI app to make payment.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please manually copy the UPI ID.",
        variant: "destructive",
      });
    }
  };

  const handlePaymentComplete = () => {
    clearCart();
    onOpenChange(false);
    toast({
      title: "Order placed successfully! 🎉",
      description: "Thank you for your order. Your delicious snacks will be ready soon!",
    });
  };

  const generateUPIString = () => {
    const merchantName = "DussehraDelights";
    const upiString = `upi://pay?pa=${UPI_ID}&pn=${merchantName}&am=${totalAmount}&cu=INR&tn=Snack Order`;
    return encodeURIComponent(upiString);
  };

  const generateQRCodeData = () => {
    // Simple QR code data for UPI payment
    const qrData = {
      vpa: UPI_ID,
      name: "DussehraDelights",
      amount: totalAmount,
      currency: "INR",
      transactionNote: "Snack Order"
    };
    return JSON.stringify(qrData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Payment Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-background rounded-lg p-4 border border-primary/10">
            <h3 className="font-semibold text-foreground mb-3">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-foreground">{item.name} x{item.quantity}</span>
                  <span className="text-primary font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-primary/20 pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-foreground">Total:</span>
                  <span className="text-primary">₹{totalAmount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Payment Method</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={paymentMethod === 'upi' ? 'default' : 'outline'}
                onClick={() => setPaymentMethod('upi')}
                className="flex items-center gap-2"
              >
                <Smartphone className="h-4 w-4" />
                UPI Apps
              </Button>
              <Button
                variant={paymentMethod === 'qr' ? 'default' : 'outline'}
                onClick={() => setPaymentMethod('qr')}
                className="flex items-center gap-2"
              >
                <QrCode className="h-4 w-4" />
                QR Code
              </Button>
            </div>
          </div>

          {/* UPI Payment Section */}
          {paymentMethod === 'upi' && (
            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-primary" />
                  Pay with UPI
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Copy the UPI ID and paste it in any UPI app (Google Pay, PhonePe, Paytm, etc.)
                </p>
                
                <div className="flex items-center gap-2 p-3 bg-background rounded border border-primary/20">
                  <code className="flex-1 text-sm font-mono text-primary">{UPI_ID}</code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyUPI}
                    className="flex items-center gap-1"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </div>

                <div className="mt-3">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <a
                      href={`upi://pay?pa=${UPI_ID}&pn=DussehraDelights&am=${totalAmount}&cu=INR&tn=Snack Order`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in UPI App
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* QR Code Payment Section */}
          {paymentMethod === 'qr' && (
            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
                  <QrCode className="h-4 w-4 text-primary" />
                  Scan QR Code
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Scan this QR code with any UPI app to make payment
                </p>
                
                {/* Simple QR Code Placeholder */}
                <div className="w-48 h-48 mx-auto bg-white border-2 border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <QrCode className="h-16 w-16 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">QR Code</p>
                    <p className="text-xs font-mono text-primary">{UPI_ID}</p>
                    <p className="text-lg font-bold text-primary">₹{totalAmount}</p>
                  </div>
                </div>

                <div className="bg-background rounded border border-primary/20 p-3">
                  <p className="text-xs text-muted-foreground">UPI Details:</p>
                  <p className="text-sm font-mono text-primary">{UPI_ID}</p>
                  <p className="text-sm font-bold text-primary">Amount: ₹{totalAmount}</p>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-chart-2/10 border border-chart-2/20 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">📱 Payment Instructions:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
              <li>Enter the UPI ID or scan the QR code</li>
              <li>Enter amount: <span className="font-bold text-primary">₹{totalAmount}</span></li>
              <li>Add note: "Snack Order"</li>
              <li>Complete the payment</li>
              <li>Click "Payment Complete" below</li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePaymentComplete}
              className="flex-1 bg-chart-2 hover:bg-chart-2/90 text-white"
            >
              Payment Complete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
