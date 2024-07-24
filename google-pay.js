import "@google-pay/button-element/dist/index.js";

const button = document.querySelector('google-pay-button');

button.addEventListener('load', () => {
    button.paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    billingAddressRequired: true,
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                },
            },
        ],
        merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
        },
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '10.00',
            currencyCode: 'EUR',
            countryCode: 'FR',
        },
    };

    button.addEventListener('loadpaymentdata', event => {
        console.log('load payment data', event.detail);
    });
});