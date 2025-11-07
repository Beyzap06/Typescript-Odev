class Logger {
  private logHistory: string[] = [];

  log(message: string) {
    console.log(message);
    this.logHistory.push(message);
  }

  getHistory() {
    return this.logHistory;
  }
}

const logger = new Logger();
logger.log("İlk log.");
logger.log("İkinci log.");

// console.log(logger.logHistory); // ❌ Bu satır hata verecek
console.log(logger.getHistory());

// BEKLENEN ÇIKTI:
// İlk log.
// İkinci log.
// [ 'İlk log.', 'İkinci log.' ]
