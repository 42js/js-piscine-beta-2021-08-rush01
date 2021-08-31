class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.token = 30;
    this.cardOnHand = '';
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

  addToken(token) {
    this.token += token;
  }

  subtractToken(token) {
    this.token -= token;
  }

  setCardOnHand(card) {
    this.cardOnHand = card;
  }

  getCardOnHand() {
    return this.cardOnHand;
  }

  getType() {
    return this.type;
  }
}

export default Player;
