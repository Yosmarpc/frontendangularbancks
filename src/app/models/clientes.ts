export  class clienteModel{

    constructor(
        public idCliente: number,
        public nameClients: string,
        public nameApellidos: string,
        public  genero: string,
        public RutClients: string,
        public direcciónActual: string,
        public CuentasActivas: [],
        public  idCuenta: string,
        public  TipoCuenta:  string,
        public TotalActivos:  number,
        public TipoMenda: string,
        public Estado: boolean,
        public IndicadorCuenta: boolean

    ){

    }
}