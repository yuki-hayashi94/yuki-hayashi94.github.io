function config(){if(na=n1,nb=n1+n2,nc=n1+n2+n3,nd=n1+n2+n3+n4,nx=n1+n2+n3+n4+n5,nx1=nx,ivleft=na-ispc,ivright=nd+ispc,nx1>Nxmax){const i=!0;try{if(console.log("Increase Nxmax in global.i"),i)throw new Error("error")}catch(i){console.log(i.message)}}else if(nk>Nkmax){const i=!0;try{if(console.log("Increase Nkmax in global.i"),i)throw new Error("error")}catch(i){console.log(i.message)}}for(epp=Math.abs(dop1)*dx/np1,xa=dx*na,xb=dx*nb,xc=dx*nc,xd=dx*nd,xmax=dx*nx1,i=0;i<=nx1;i++)i<=na?(ec0[i]=pot1*q,cnd[i]=dop1):i>na&&i<=nb?(ec0[i]=pot2*q,cnd[i]=dop2):i>nb&&i<=nc?(ec0[i]=pot3*q,cnd[i]=dop3):i>nc&&i<=nd?(ec0[i]=pot4*q,cnd[i]=dop4):(ec0[i]=pot5*q,cnd[i]=dop5);if(0!=ispc){for(i=ivleft;i<=na;i++)cnd[i]=dop_spc;for(i=nd;i<=ivright;i++)cnd[i]=dop_spc}for(i=1;i<=nx1;i++)a1[i]=1,b1[i]=-2,c1[i]=1;for(bt[1]=b1[1],gmm[1]=c1[1]/bt[1],i=2;i<=nx-1;i++)bt[i]=b1[i]-a1[i]*gmm[i-1],gmm[i]=c1[i]/bt[i];for(i=1;i<=nx1;i++)qeps[i]=q/eps_stat/ep0*dx*dx}function setkmesh(){if("Frensley"===ikmesh)for(dk=(pi/2/dx- -pi/2/dx)/nk,iky=1;iky<=nk;iky++)kmesh[iky]=-1*pi/2/dx+dk*(iky-.5);else if("Ferry1"===ikmesh)for(dk=pi/dx/nx,nk=Math.floor(2*pi/dx/dk)+1,iky=1;iky<=nk;iky++)kmesh[iky]=-1*pi/dx+dk*(iky-1);else if("Ferry2"===ikmesh)for(dk=pi/dx/nx,nk=Math.floor(pi/dx/dk)+1,iky=1;iky<=nk;iky++)kmesh[iky]=-1*pi/2/dx+dk*(iky-1);if("yes"===iweight)for(i1=1;i1<=nk;i1++){for(j1=1;j1<=nk;j1++)Math.abs(j1-i1)<=Math.min(Math.abs(j1-1),Math.abs(j1-nk))?weight[j1][i1]=1:weight[j1][i1]=0;weightv[i1]=Math.sin(2*pi*i1/nk)/(2*pi*i1/nk)}else for(i1=1;i1<=nk;i1++){for(j1=1;j1<=nk;j1++)weight[j1][i1]=1;weightv[i1]=1}for(ik=1;ik<=nk;ik++)for(ig=0;ig<=ng;ig++)sinvnl[ig][ik]=Math.sin(dk*ik*2*dx*ig)}function param(){for(iseed=38467,am=mass*am0,eps=eps_stat*ep0,epf=eps_inf*ep0,ep=1/(1/epf-1/eps),rou=5360,sv=5240,cl=rou*sv*sv,z2=4,da=7*q,hwo=.03536,bktq=bk*tem/q,qh=q/h,smh=Math.sqrt(2*am)/h*Math.sqrt(q),hhm=h/am/q*h/2,hm=h/am,wo=hwo*q/h,no=1/(Math.exp(hwo/bktq)-1),dos=(Math.sqrt(2*am)/h)**3/4/pi/pi*Math.sqrt(q),poe=q/8/pi/ep*q*wo*(no+1),poa=poe*no/(1+no),aco=2*pi*da*da*bktq/h*q/cl,qd2=q*Math.abs(dop1)/bktq/eps,bimp=2*pi*Math.abs(dop1)*q*q/h*q/eps/eps*q,qd2_w=q*Math.abs(dop3)/bktq/eps,bimp_w=2*pi*Math.abs(dop3)*q*q/h*q/eps/eps*q,de=.002,iemax=1e3,ie=1;ie<=iemax;ie++)ei=de*ie,sei=Math.sqrt(ei),ef=ei-hwo,ef>0?(sef=Math.sqrt(ef),qmax=sef+sei,qmin=sei-sef,swk[1][1][ie]=poe*smh*sei/ei/q*Math.log(qmax/qmin)):swk[1][1][ie]=0,ef=ei+hwo,sef=Math.sqrt(ef),qmax=sef+sei,qmin=sef-sei,swk[1][2][ie]=swk[1][1][ie]+poa*smh*sei/ei/q*Math.log(qmax/qmin),ef=ei,sef=Math.sqrt(ef),swk[1][3][ie]=swk[1][2][ie]+aco*sef*dos,ef=ei,sef=Math.sqrt(ef),ak=smh*Math.sqrt(ef),qq=qd2*(4*ak*ak+qd2),wk=bimp/qq*sef*dos,swk[1][4][ie]=swk[1][3][ie]+wk,ef=ei-hwo,ef>0?(sef=Math.sqrt(ef),qmax=sef+sei,qmin=sei-sef,swk[2][1][ie]=poe*smh*sei/ei/q*Math.log(qmax/qmin)):swk[2][1][ie]=0,ef=ei+hwo,sef=Math.sqrt(ef),qmax=sef+sei,qmin=sef-sei,swk[2][2][ie]=swk[2][1][ie]+poa*smh*sei/ei/q*Math.log(qmax/qmin),ef=ei,sef=Math.sqrt(ef),swk[2][3][ie]=swk[2][2][ie]+aco*sef*dos,ef=ei,sef=Math.sqrt(ef),ak=smh*Math.sqrt(ef),qq=qd2_w*(4*ak*ak+qd2_w),wk=bimp_w/qq*sef*dos,swk[2][4][ie]=swk[2][3][ie]+wk;for(i=1;i<=4;i++)for(ie=1;ie<iemax;ie++)swk[1][i][ie]=swk[1][i][ie]*scatamp;for(i=1;i<=4;i++)for(ie=1;ie<iemax;ie++)swk[2][i][ie]=swk[2][i][ie]*scatamp;for(gm1=swk[1][4][1],gm2=swk[2][4][1],ie=1;ie<=iemax;ie++)swk[1][4][ie]>gm1&&(gm1=swk[1][4][ie]),swk[2][4][ie]>gm2&&(gm2=swk[2][4][ie]);for(i=1;i<=4;i++)for(ie=1;ie<iemax;ie++)swk[1][i][ie]=swk[1][i][ie]/gm1;for(i=1;i<=4;i++)for(ie=1;ie<iemax;ie++)swk[2][i][ie]=swk[2][i][ie]/gm2}function initia(){for(n=0,i=0;i<=nx1;i++)if(npi=cnd[i]*dx/epp+.5,0!=i&&i!=nx1||(npi=np1/2),0!=npi)for(m=1;m<=npi;m++){if(n+=1,n>Npmax){const i=!0;try{if(console.log("Excution is terminated!"),console.log("Number of particles exceeds Npmax"),i)throw new Error("error")}catch(i){console.log(i.message)}}iv=1,"yes"===ifermi?(re0=1/(1+Math.exp(-efermi/bktq)),ransu=re0*rnd(),ei=efermi-bktq*Math.log(ransu/(1-ransu))):"no"===ifermi&&(ei=-bktq*Math.log(rnd())*1.5),ak=smh*Math.sqrt(ei),cf=1-2*rnd(),sf=Math.sqrt(1-cf*cf),fi=2*pi*rnd(),p[n][1]=ak*sf*Math.cos(fi),p[n][2]=ak*sf*Math.sin(fi),p[n][3]=ak*cf,p[n][4]=-Math.log(rnd())/gm1,p[n][5]=dx*(rnd()+i-.5),p[n][6]=1,0==i&&(p[n][5]=.5*dx*rnd()),i==nx1&&(p[n][5]=xmax-.5*dx*rnd()),ip[n]=iv}for(inum=n,n=inum+1;n<=Npmax;n++)ip[n]=9;for(i=0;i<=nx1;i++)qhf[i]=0,cn[i]=0,acn[i]=0,vx[i]=0,avx[i]=0,eng[i]=0,aeng[i]=0,adpsi[i]=0;for(i=0;i<=nx1;i++)for(ik=1;ik<=nk;ik++)for(it=0;it<4;it++)VFint[ik][i][it]=0;nout1=0,nout2=0,nin1=0,nin2=0,nsopte1=0,nsopte2=0,nsopta1=0,nsopta2=0,nsaco1=0,nsaco2=0,nsimp1=0,nsimp2=0,SumCurr1=0,SumCurr2=0,SumCurr3=0,jcurrRS=0,CurRSavc=0,CurRSavt=0,CurQNVav=0}function initP0(){for(i=0;i<=na;i++)psi[i]=0;for(i=nd+1;i<=nx+1;i++)psi[i]=vd;for(i=na;i<=nd;i++)psi[i]=psi[1]+(psi[nx]-psi[1])*(i-na)/(nd-na)}function initial_setting(){config(),setkmesh(),param(),initia(),initP0()}function paramp(){for(iseed=38467,amp=massp*am0,eps=eps_stat*ep0,epf=eps_inf*ep0,ep=1/(1/epf-1/eps),rou=5360,sv=5240,cl=rou*sv*sv,z2=4,da=7*q,hwo=.03536,bktq=bk*tem/q,qh=q/h,smhp=Math.sqrt(2*amp)/h*Math.sqrt(q),hhmp=h/amp/q*h/2,hmp=h/amp,wo=hwo*q/h,no=1/(Math.exp(hwo/bktq)-1),dos=(Math.sqrt(2*amp)/h)**3/4/pi/pi*Math.sqrt(q),poe=q/8/pi/ep*q*wo*(no+1),poa=poe*no/(1+no),aco=2*pi*da*da*bktq/h*q/cl,qd2=q*Math.abs(dop1)/bktq/eps,bimp=2*pi*Math.abs(dop1)*q*q/h*q/eps/eps*q,qd2_w=q*Math.abs(dop3)/bktq/eps,bimp_w=2*pi*Math.abs(dop3)*q*q/h*q/eps/eps*q,de=.002,iemax=1e3,ie=1;ie<=iemax;ie++)ei=de*ie,sei=Math.sqrt(ei),ef=ei-hwo,ef>0?(sef=Math.sqrt(ef),qmax=sef+sei,qmin=sei-sef,swk2[1][1][ie]=poe*smhp*sei/ei/q*Math.log(qmax/qmin)):swk2[1][1][ie]=0,ef=ei+hwo,sef=Math.sqrt(ef),qmax=sef+sei,qmin=sef-sei,swk2[1][2][ie]=swk2[1][1][ie]+poa*smhp*sei/ei/q*Math.log(qmax/qmin),ef=ei,sef=Math.sqrt(ef),swk2[1][3][ie]=swk2[1][2][ie]+aco*sef*dos,ef=ei,sef=Math.sqrt(ef),ak=smhp*Math.sqrt(ef),qq=qd2*(4*ak*ak+qd2),wk=bimp/qq*sef*dos,swk2[1][4][ie]=swk2[1][3][ie]+wk,ef=ei-hwo,ef>0?(sef=Math.sqrt(ef),qmax=sef+sei,qmin=sei-sef,swk2[2][1][ie]=poe*smhp*sei/ei/q*Math.log(qmax/qmin)):swk2[2][1][ie]=0,ef=ei+hwo,sef=Math.sqrt(ef),qmax=sef+sei,qmin=sef-sei,swk2[2][2][ie]=swk2[2][1][ie]+poa*smhp*sei/ei/q*Math.log(qmax/qmin),ef=ei,sef=Math.sqrt(ef),swk2[2][3][ie]=swk2[2][2][ie]+aco*sef*dos,ef=ei,sef=Math.sqrt(ef),ak=smhp*Math.sqrt(ef),qq=qd2_w*(4*ak*ak+qd2_w),wk=bimp_w/qq*sef*dos,swk2[2][4][ie]=swk2[2][3][ie]+wk;for(i=1;i<=4;i++)for(ie=1;ie<=iemax;ie++)swk2[1][i][ie]=swk2[1][i][ie]*scatamp;for(i=1;i<=4;i++)for(ie=1;ie<=iemax;ie++)swk2[2][i][ie]=swk2[2][i][ie]*scatamp;for(gm1p=swk2[1][4][1],gm2p=swk2[2][4][1],ie=1;ie<=iemax;ie++)swk2[1][4][ie]>gm1p&&(gm1p=swk2[1][4][ie]),swk2[2][4][ie]>gm2p&&(gm2p=swk2[2][4][ie]);for(i=1;i<=4;i++)for(ie=1;ie<=iemax;ie++)swk2[1][i][ie]=swk2[1][i][ie]/gm1p;for(i=1;i<=4;i++)for(ie=1;ie<=iemax;ie++)swk2[2][i][ie]=swk2[2][i][ie]/gm2p}function initiap(){for(n=0,i=0;i<=nx1;i++)if(npi=cnd[i]*dx/epp-.5,0!=i&&i!=nx1||(npi=np1/2),0!=npi)for(m=1;m<=-npi;m++){if(n+=1,n>Npmax){const i=!0;try{if(console.log("Excution is terminated!"),console.log("Number of particles exceeds Npmax"),i)throw new Error("error")}catch(i){console.log(i.message)}}iv2=1,"yes"===ifermi?(re0=1/(1+Math.exp(-efermi/bktq)),ransu=re0*rnd(),ei=efermi-bktq*Math.log(ransu/(1-ransu))):"no"===ifermi&&(ei=-bktq*Math.log(rnd())*1.5),ak=smhp*Math.sqrt(ei),cf=1-2*rnd(),sf=Math.sqrt(1-cf*cf),fi=2*pi*rnd(),p2[n][1]=ak*sf*Math.cos(fi),p2[n][2]=ak*sf*Math.sin(fi),p2[n][3]=ak*cf,p2[n][4]=-Math.log(rnd())/gm1p,p2[n][5]=dx*(rnd()+i-.5),p2[n][6]=1,0==i&&(p2[n][5]=.5*dx*rnd()),i==nx1&&(p2[n][5]=xmax-.5*dx*rnd()),ip2[n]=iv2}for(inum2=n,n=inum2+1;n<=Npmax;n++)ip2[n]=9;for(i=0;i<=nx1;i++)qhf[i]=0,cp[i]=0,acp[i]=0,vxp[i]=0,avxp[i]=0,adpsi[i]=0}function initial_settingp(){paramp(),initiap()}
