var pik, kix;
var kx, ky, kz, ki, kf, kmesh, no;
var kpos1;
var ipoiss, iscatt, imodel, ifull, iweight, ibunpu;
var ifermi, ikmesh;
var r1, r2;

var gdx = new Array();
var gcn = new Array();
var gdpsi = new Array();
var plotCnData = new Array();
var plotDpsiData = new Array();

var gdpsi_500 = new Array();
var plotDpsiData_500 = new Array();
var gdpsi_1500 = new Array();
var plotDpsiData_1500 = new Array();
var gdpsi_3000 = new Array();
var plotDpsiData_3000 = new Array();
var gdpsi_4500 = new Array();
var plotDpsiData_4500 = new Array();
var gdpsi_6000 = new Array();
var plotDpsiData_6000 = new Array();
var gdpsi_7500 = new Array();
var plotDpsiData_7500 = new Array();
var gdpsi_9000 = new Array();
var plotDpsiData_9000 = new Array();
var gdpsi_10500 = new Array();
var plotDpsiData_10500 = new Array();
var gdpsi_12000 = new Array();
var plotDpsiData_12000 = new Array();
var gdpsi_13500 = new Array();
var plotDpsiData_13500 = new Array();
var gdpsi_15000 = new Array();
var plotDpsiData_15000 = new Array();

var gcn_500 = new Array();
var plotCnData_500 = new Array();
var gcn_1500 = new Array();
var plotCnData_1500 = new Array();
var gcn_3000 = new Array();
var plotCnData_3000 = new Array();
var gcn_4500 = new Array();
var plotCnData_4500 = new Array();
var gcn_6000 = new Array();
var plotCnData_6000 = new Array();
var gcn_7500 = new Array();
var plotCnData_7500 = new Array();
var gcn_9000 = new Array();
var plotCnData_9000 = new Array();
var gcn_10500 = new Array();
var plotCnData_10500 = new Array();
var gcn_12000 = new Array();
var plotCnData_12000 = new Array();
var gcn_13500 = new Array();
var plotCnData_13500 = new Array();
var gcn_15000 = new Array();
var plotCnData_15000 = new Array();

var plotVdIData = new Array();
plotVdIData.push({x: 0, y: 0});

const Nxmax = 400, Npmax = 1000000;
const Nkmax = 400;
const intMC = 1000;
const h = 1.05459e-34, bk = 1.38066e-23;
const q = 1.60219e-19, pi = 3.1415927;
const ep0 = 8.85419e-12, am0 = 9.10953e-31;
const eps_stat = 12.90, eps_inf = 10.92;
const mass = 0.067; //GaAs
//const mass = 1.08 
//const eps_stat = 11.7  //Si
const alat = 5.65e-10;

/*array
fortran : 
i(4) -> i(1),i(2),i(3),i(4)
javascript : var i = new Array(4);
i[4] -> i[0],i[1],i[2],i[3]
// var P = new Array( NX );
/*  3*4 array 
    var data = new Array(3);
    for (i = 0; i < data.length; i++) {
        data[i] = new Array(4);
    }
*/
var dx, xa, xb, xc, xd, xmax;
var dt, t, times;
var tem;
var pot1, pot2, pot3, pot4, pot5;
var dop1, dop2, dop3, dop4, dop5;
var dop_spc;
var psi = new Array(Nxmax+1);
var dpsi = new Array(Nxmax+1);
var ec0 = new Array(Nxmax+1);
var cnd = new Array(Nxmax+1);
var qeps = new Array(Nxmax+1);
var qhf = new Array(Nxmax+1);
var qh, epp;
var vd, vd_max, vd_display;
var kx, ky, kz, ts, x, affi0, affi;
var p = new Array(Npmax+1);
for(var i = 0; i < p.length; i++) p[i] = new Array(6+1);
var smh, hhm;
var cn0 = new Array(Nxmax+1);
var vx0 = new Array(Nxmax+1);
var eng0 = new Array(Nxmax+1);
var outcn = new Array(Nxmax+1);
var a1 = new Array(Nxmax+1);
var b1 = new Array(Nxmax+1);
var c1 = new Array(Nxmax+1);
var bt = new Array(Nxmax+1);
var gmm = new Array(Nxmax+1);
var hwo, de, scatamp;
/*
var swk = new Array(3);
for(var i = 0; i < swk.length; i++) swk[i] = new Array(5);
for(var i = 0; i < swk.length; i++){
    for(var j = 0; j < swk[i].length; j++){
        swk[i][j] = new Array(1001);
    }
}
*/
/*
var swk = new Array(4);
for(var i = 0; i < swk.length; i++) swk[i] = new Array(6);
for(var i = 0; i < swk.length; i++){
    for(var j = 0; j < swk[i].length; j++){
        swk[i][j] = new Array(1001);
    }
}
*/
var swk = new Array(3);
for(var i = 0; i < swk.length; i++) swk[i] = new Array(5);
for(var i = 0; i < swk.length; i++){
    for(var j = 0; j < swk[i].length; j++){
        swk[i][j] = new Array(1001);
    }
}
for(var i = 0; i < 3; i++){
    for(var j = 0; j < 5; j++){
        for(var k = 0; k < 1001; k++){
            swk[i][j][k] = 0.0;
        }
    }
}
var gm1, gm2;
var hm;
var bktq;
var qd2, qd2_w;
var cn = new Array(Nxmax+1);
var vx = new Array(Nxmax+1);
var eng = new Array(Nxmax+1);
var acn = new Array(Nxmax+1);
var avx = new Array(Nxmax+1);
var aeng = new Array(Nxmax+1);
var vEp = new Array(Nxmax+1);
for(var i = 0; i < vEp.length; i++) vEp[i] = new Array(3+1);
var vG = new Array(Nxmax+1);
var vQ = new Array(Nxmax+1);
var emin, emax, edivn, estep;
var efermi;
var partno = new Array(Nkmax+1);
for(var i = 0; i < partno.length; i++) partno[i] = new Array(Nxmax+1);
var kmesh = new Array(Nkmax+1);
var dk;
var areainj;
var CurrRSc, CurrRSt, AVCurrQNV;
var CurrQNV = new Array(Nxmax+1);
var CurRSavc, CurRSavt, CurQNVav;
var SumCurr1, SumCurr2, SumCurr3;
var VFint = new Array(Nkmax+1);
for(var i = 0; i < VFint.length; i++) VFint[i] = new Array(Nxmax+1);
for(var i = 0; i < VFint.length; i++){
    for(var j = 0; j < VFint[i].length; j++){
        VFint[i][j] = new Array(4+1);
    }
}
var VFthresh, Qfw;
var weight = new Array(Nkmax+1);
for(var i = 0; i < weight.length; i++) weight[i] = new Array(Nkmax+1);
var weightv = new Array(Nkmax+1);

var n1, n2, n3, n4, n5, ispc;
var ivleft, ivright;
var jt, jtl, jtrans, jcurrRS, jaffin, jbunp;

var na, nb, nc, nd;
var nx, nx1;
var inum, inum2;
var np1, iv;
var ip = new Array(Npmax+1);
var iemax, iseed;
var nout1, nout2, nin1, nin2;
var nsopte1, nsopte2, nsopta1, nsopta2, nsaco1, nsaco2;
var nsimp1, nsimp2;
var ienum1, ienum2;
var nk, ng, nclreg1, nclreg2, nqpmax, intPS, nqp;

var ngp1, pix, pik;
var sinvnl = new Array(Nxmax+1);
for(var i = 0; i < sinvnl.length; i++) sinvnl[i] = new Array(Nkmax+1);
var odpsi = new Array(Nxmax+1);
var adpsi = new Array(Nxmax+1);
var ocn = new Array(Nxmax+1);


var znpt = new Array(2+1);
var nicrea;

/* pmos */
const massp = 0.34;  //GaAs
//const massp = 0.54 //Si
var ip2 = new Array(Npmax+1);
var iv2;
var ocp = new Array(Nxmax+1);
var cp = new Array(Nxmax+1);
var vxp = new Array(Nxmax+1);
var engp = new Array(Nxmax+1);
var acp = new Array(Nxmax+1);
var avxp = new Array(Nxmax+1);
var ecp0 = new Array(Nxmax+1);
var cp0 = new Array(Nxmax+1);
var vxp0 = new Array(Nxmax+1);
var engp0 = new Array(Nxmax+1);
var p2 = new Array(Npmax+1);
for(var i = 0; i < p2.length; i++) p2[i] = new Array(6+1);
var kx2, ky2, kz2, ts2, xp, affi2
var hmp, hhmp, smhp;
var gcp = new Array();
var plotCpData = new Array();
var gcp_500 = new Array();
var plotCpData_500 = new Array();
var gcp_1500 = new Array();
var plotCpData_1500 = new Array();
var gcp_3000 = new Array();
var plotCpData_3000 = new Array();
var gcp_4500 = new Array();
var plotCpData_4500 = new Array();
var gcp_6000 = new Array();
var plotCpData_6000 = new Array();
var gcp_7500 = new Array();
var plotCpData_7500 = new Array();
var gcp_9000 = new Array();
var plotCpData_9000 = new Array();
var gcp_10500 = new Array();
var plotCpData_10500 = new Array();
var gcp_12000 = new Array();
var plotCpData_12000 = new Array();
var gcp_13500 = new Array();
var plotCpData_13500 = new Array();
var gcp_15000 = new Array();
var plotCpData_15000 = new Array();
var swk2 = new Array(3);
for(var i = 0; i < swk2.length; i++) swk2[i] = new Array(5);
for(var i = 0; i < swk2.length; i++){
    for(var j = 0; j < swk2[i].length; j++){
        swk2[i][j] = new Array(1001);
    }
}
for(var i = 0; i < 3; i++){
    for(var j = 0; j < 5; j++){
        for(var k = 0; k < 1001; k++){
            swk2[i][j][k] = 0.0;
        }
    }
}
var gm1p, gm2p;

var dotted = new Array();
var en = new Array();