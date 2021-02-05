tem = 300.0;
var dx0 = 1.0;
dx = dx0 * 1.0e-9;

n1 = 60;
pot1 = 0.00;
dop1 = 1.0e+24;
n2 = 10;
pot2 = 0.00;
dop2 = 1.0e+22;
n3 = 10;
pot3 = 0.00;
dop3 = 1.0e+22;
n4 = 10;
pot4 = 0.00;
dop4 = 1.0e+22;
n5 = 60;
pot5 = 0.00;
dop5 = 1.0e+24;

ifermi = "no";
efermi = 80.0;
efermi = efermi * 1.0e-3;
ispc = 10;
dop_spc = 1.0e+22;

//vd = 0.2;
var vd_display = 0.2;
var vd_max = 0.2;
var vd_min = -0.2;
var step;
var vd_in;
var dif = 0.1;

ipoiss = "poisson";
intPS = 20;

iscatt = "scatall";
scatamp = 1.0;

imodel = "classic";
ifull = "on";
nqpmax = 10;

iweight = "yes";
VFthresh = 1.0e+14;
ikmesh = "Frensley";
nk = 76;
ng = 30;
ibunpu = "ngp";
nclreg1 = 0;
nclreg2 = 0;
dt = 1.0e-16;
jtl = 15000;
jtrans = 2000;
jaffin = 10000;
jbunp = 200000;
np1 = 20;  //粒子数
areainj = 0.1;
