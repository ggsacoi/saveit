const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0
};

const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
        'gateway': 'example',
        'gatewayMerchantId': 'exampleGatewayMerchantId'
    }
};

const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];
const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
        allowedAuthMethods: allowedCardAuthMethods,
        allowedCardNetworks: allowedCardNetworks
    }
};

const cardPaymentMethod = Object.assign(
    {tokenizationSpecification: tokenizationSpecification},
    baseCardPaymentMethod
);

const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

const isReadyToPayRequest = Object.assign({}, baseRequest);
isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

paymentsClient.isReadyToPay(isReadyToPayRequest)
    .then(function (response) {
        if (response.result) {
            const container = document.getElementById('container');
            const button = paymentsClient.createButton({
                onClick: onGooglePaymentButtonClicked,
                allowedPaymentMethods: [cardPaymentMethod],
                buttonColor: 'default',
                buttonType: 'buy',
                buttonRadius: 21
            });
            container.appendChild(button);
        }
    })
    .catch(function (err) {
        console.error(err);
    });

function getGoogleTransactionInfo() {
    return {
        totalPriceStatus: 'FINAL',
        totalPrice: '123.45',
        currencyCode: 'USD',
        countryCode: 'US'
    };
}

function onGooglePaymentButtonClicked() {
    const paymentDataRequest = Object.assign({}, baseRequest);
    paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
    paymentDataRequest.transactionInfo = getGoogleTransactionInfo();
    paymentDataRequest.merchantInfo = {
        merchantName: 'Example Merchant',
        merchantId: '12345678901234567890'
    };
    paymentDataRequest.callbackIntents = ["PAYMENT_AUTHORIZATION"];
    paymentDataRequest.paymentDataCallbacks = {
        onPaymentAuthorized: onPaymentAuthorized,
        onPaymentDataChanged: onPaymentDataChanged
    };

    paymentsClient.loadPaymentData(paymentDataRequest)
        .then(function (paymentData) {
            const paymentToken = paymentData.paymentMethodData.tokenizationData.token;
            console.log('Payment successful', paymentToken);
        })
        .catch(function (err) {
            paymentDataRequest.paymentDataCallbacks
        });
}

function onPaymentAuthorized(paymentData) {
    return new Promise(function (resolve, reject) {
        processPayment(paymentData)
            .then(function () {
                resolve({ transactionState: 'SUCCESS' });
            })
            .catch(function () {
                resolve({
                    transactionState: 'ERROR',
                    error: {
                        intent: 'PAYMENT_AUTHORIZATION',
                        message: 'Insufficient funds',
                        reason: 'PAYMENT_DATA_INVALID'
                    }
                });
            });
    });
}

function onPaymentDataChanged(intermediatePaymentData) {
    return new Promise(function (resolve, reject) {
        let paymentDataRequestUpdate = {};
        // Add your logic for handling payment data changes
        resolve(paymentDataRequestUpdate);
    });
}

function processPayment(paymentData) {
    return new Promise(function (resolve, reject) {
        // Simulate payment processing
        console.log('Processing payment', paymentData);
        setTimeout(resolve, 1000);
    });
}