# Shopping Cart & UPI Payment Integration

## Features Added

### 🛒 Shopping Cart
- **Add to Cart**: Click "Add to Cart" button on any product
- **Cart Icon**: Fixed position cart icon in top-right corner with item count badge
- **Cart Drawer**: Slide-out cart panel showing all items
- **Quantity Management**: Increase/decrease item quantities with +/- buttons
- **Remove Items**: Delete items from cart with trash icon
- **Real-time Updates**: Cart updates instantly when items are added/removed

### 💳 UPI Payment Integration
- **UPI ID**: `8317445877@upi` (configured for payments)
- **Payment Methods**:
  - **UPI Apps**: Direct integration with Google Pay, PhonePe, Paytm, etc.
  - **QR Code**: Visual QR code for scanning with UPI apps
- **Payment Flow**:
  1. Add items to cart
  2. Click cart icon to view items
  3. Click "Proceed to Payment"
  4. Choose payment method (UPI Apps or QR Code)
  5. Complete payment in UPI app
  6. Confirm payment completion

### 🎨 User Experience
- **Toast Notifications**: Success messages when items are added to cart
- **Responsive Design**: Works on desktop and mobile devices
- **Festive Theme**: Maintains the Dussehra festival design aesthetic
- **Smooth Animations**: Hover effects and transitions throughout

## Technical Implementation

### State Management
- **CartContext**: React Context for global cart state management
- **useReducer**: For complex cart state updates
- **Local Storage**: Cart state persists across page reloads

### Components
- `CartContext.tsx`: Cart state management and context provider
- `CartIcon.tsx`: Fixed position cart icon with item count
- `CartDrawer.tsx`: Slide-out cart panel with item management
- `CheckoutDialog.tsx`: Payment processing with UPI integration
- Updated `ProductCard.tsx`: Added "Add to Cart" functionality

### Payment Integration
- **UPI Deep Links**: Direct links to UPI apps for payment
- **QR Code Generation**: Visual payment codes for scanning
- **Copy to Clipboard**: Easy UPI ID copying functionality
- **Payment Confirmation**: Manual confirmation after UPI payment

## Usage Instructions

1. **Adding Items**: Click "Add to Cart" on any product
2. **Viewing Cart**: Click the cart icon in the top-right corner
3. **Managing Items**: Use +/- buttons to adjust quantities
4. **Checkout**: Click "Proceed to Payment" in cart drawer
5. **Payment**: Choose UPI Apps or QR Code method
6. **Complete**: Confirm payment completion to finalize order

## Configuration

The UPI ID is configured in `CheckoutDialog.tsx`:
```typescript
const UPI_ID = "8317445877@upi";
```

To change the UPI ID, update this constant in the CheckoutDialog component.

## Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support  
- **Safari**: Full support
- **Mobile Browsers**: Full support with touch-friendly interface

## Security Notes

- UPI ID is hardcoded for demo purposes
- In production, consider environment variables for sensitive data
- Payment verification should be handled server-side for production use
