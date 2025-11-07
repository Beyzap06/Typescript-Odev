class MathHelper {
  static PI = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * MathHelper.PI * radius;
  }
}

// Sınıfı 'new' ile oluşturmadan doğrudan kullanın
console.log(MathHelper.PI);
console.log(MathHelper.calculateCircumference(10));

// BEKLENEN ÇIKTI:
// 3.14159
// 62.8318
