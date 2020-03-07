// https://www.mw-spedition.com/czym-jest-ldm-i-jak-przeliczac-wedlug-niego-wielkosc-towaru/

class Calc extends Data {
  constructor(props) {
    super(props);

    document
      .getElementById("calk")
      .addEventListener("click", this.btnHandling.bind(this));
    document.getElementById("free");
  }
  checkQuantity = () => {
    // return this.dimensions[{ dim2 }] * this.dimensions[{ dim4 }];
  };

  btnHandling() {
    const dimension = this.dimensions.slice(-1);
    const { id, dim1, dim2, dim3, dim4 } = dimension[0];

    const calcLdm = (dim1 * dim2 * dim4) / 10000 / this.tolatWidth;

    this.calcLdm.push(calcLdm);

    this.leftLdm();
  }

  leftLdm = () => {
    const calcLdm = this.totalLdm - this.calcLdm.slice(-1);
    free.textContent = `Pozostało wolnych: ${Math.round(
      calcLdm
    )} ldm (czyli około ${Math.round(calcLdm / 0.4)} euro palet)`;

    this.totalLdm = calcLdm;
    console.log(this.totalLdm);
  };

  render = () => {};
}
const calc = new Calc();