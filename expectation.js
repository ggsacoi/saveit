// Importer et configurer l'API Google Pay
const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
  };
  
  // Spécification de la tokenisation pour le gateway de paiement
  const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      gateway: 'example', // Remplacez par votre passerelle de paiement réelle
      gatewayMerchantId: 'exampleGatewayMerchantId', // ID du marchand
    },
  };
  
  // Réseaux de cartes et méthodes d'authentification autorisés
  const allowedCardNetworks = ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'];
  const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];
  
  // Configuration de la méthode de paiement par carte de base
  const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks,
    },
  };
  
  // Méthode de paiement par carte complète incluant la tokenisation
  const cardPaymentMethod = {
    ...baseCardPaymentMethod,
    tokenizationSpecification: tokenizationSpecification,
  };
  
  // Créer le PaymentsClient de Google
  const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });
  
  // Vérifier si l'utilisateur est prêt à payer
  const isReadyToPayRequest = {
    ...baseRequest,
    allowedPaymentMethods: [baseCardPaymentMethod],
  };
  
  paymentsClient
    .isReadyToPay(isReadyToPayRequest)
    .then((response) => {
      if (response.result) {
        const container = document.getElementById('container');
        const button = paymentsClient.createButton({
          onClick: onGooglePaymentButtonClicked,
          allowedPaymentMethods: [cardPaymentMethod],
          buttonColor: 'default',
          buttonType: 'buy',
        });
        container.appendChild(button);
      }
    })
    .catch((err) => {
      console.error('Erreur lors de la vérification de la possibilité de paiement:', err);
    });
  
  // Fonction pour obtenir les informations de la transaction
  function getGoogleTransactionInfo() {
    return {
      totalPriceStatus: 'FINAL',
      totalPrice: '123.45',
      currencyCode: 'USD',
      countryCode: 'US',
    };
  }
  
  // Fonction pour gérer le clic sur le bouton Google Pay
  function onGooglePaymentButtonClicked() {
    const paymentDataRequest = {
      ...baseRequest,
      allowedPaymentMethods: [cardPaymentMethod],
      transactionInfo: getGoogleTransactionInfo(),
      merchantInfo: {
        merchantName: 'Example Merchant',
        merchantId: '12345678901234567890', // Remplacez par votre véritable ID de marchand Google Pay
      },
      callbackIntents: ['PAYMENT_AUTHORIZATION', 'PAYMENT_DATA_CHANGED'],
      paymentDataCallbacks: {
        onPaymentAuthorized: onPaymentAuthorized,
        onPaymentDataChanged: onPaymentDataChanged,
      },
    };
  
    // Charger les données de paiement
    paymentsClient
      .loadPaymentData(paymentDataRequest)
      .then((paymentData) => {
        // Traiter les données de paiement
        const paymentToken = paymentData.paymentMethodData.tokenizationData.token;
        console.log('Paiement réussi', paymentToken);
      })
      .catch((err) => {
        console.error('Erreur lors du chargement des données de paiement:', err);
      });
  }
  
  // Fonction pour gérer l'autorisation du paiement
  function onPaymentAuthorized(paymentData) {
    return new Promise((resolve, reject) => {
      processPayment(paymentData)
        .then(() => {
          resolve({ transactionState: 'SUCCESS' });
        })
        .catch(() => {
          resolve({
            transactionState: 'ERROR',
            error: {
              intent: 'PAYMENT_AUTHORIZATION',
              message: 'Fonds insuffisants',
              reason: 'PAYMENT_DATA_INVALID',
            },
          });
        });
    });
  }
  
  // Fonction pour gérer les changements dans les données de paiement
  function onPaymentDataChanged(intermediatePaymentData) {
    return new Promise((resolve, reject) => {
      let paymentDataRequestUpdate = {};
      // Ajoutez votre logique pour gérer les changements dans les données de paiement ici
      resolve(paymentDataRequestUpdate);
    });
  }
  
  // Simulation du traitement du paiement
  function processPayment(paymentData) {
    return new Promise((resolve, reject) => {
      console.log('Traitement du paiement', paymentData);
      setTimeout(resolve, 1000); // Simule le traitement asynchrone du paiement
    });
  }
  
  