module.exports=((R,T,Z,A,B,C,D,E,F,G,H,I,J)=>{
R={};T=()=>{throw ""};Y=(r,c)=>r.test(c);Z=x=>(typeof x)[0]=="f"
A=c=>$=>$(c||R,c=>Y(/\s/,c)?A("")($):c)
B=c=>$=>$(c||R,c=>Y(/[0-9]/,c)?$(B("")($),s=>[s[0],c+s[1]]):[c,""])
C=c=>$=>$(c||R,c=>$(c=="-"?["","-"]:[c,""],([c,s])=>$(c||R,c=>$(c=="0"?["","0"]:Y(/[1-9]/,c)?B(c)($):T(),([c,b])=>$(c||R,c=>$(c=="."?$(B("")($),([c,s])=>[c,"."+s]):[c,""],([c,f])=>$(c||R,c=>$(Y(/[eE]/,c)?$($(R,c=>Y(/[+-]/,c)?["","e"+c]:[c,"e"]),([c,es])=>$(B(c)($),([c,s])=>[c,es+s])):[c,""],([c,e])=>[c,Number(s+b+f+e)]))))))))
D=$=>$(R,h=>Y(/[0-9a-fA-F]/,h)?parseInt(h,16):T())
E=$=>$($(R,c=>c!=="\\"?c:$(R,c=>Y(/[\\"\/bfnrt]/,c)?({b:"\b",f:"\f",n:"\n",r:"\r",t:"\t","\\":"\\","/":"/",'"':''})[c]:Y(/u/,c)?$(D($),a=>$(D($),b=>$(D($),c=>$(D($),d=>String.fromCharCode(a*4096+b*256+c*16+d))))):T())),c=>c=='"'?"":$(E($),s=>(c||'"')+s))
F=$=>{var a=[],g=c=>$=>$(c||R,c=>c=="]"?a:$(H(c)($),([c,v])=>(a.push(v),$(A(c)($),c=>Y(/[,\]]/,c)?g(c==","?"":c)($):T()))));return g("")($)}
G=$=>{var o={},g=c=>$=>$(c||R,c=>c=="}"?o:$(A(c)($),c=>c!=='"'?T():$(E($),k=>$(A("")($),c=>c!==':'?T():$(H("")($),([c,v])=>(o[k]=v,$(A(c)($),c=>Y(/[,}]/,c)?g(c==","?"":c)($):T())))))));return g("")($)}
H=c=>$=>$(A(c)($),c=>c=="["?$(F($),v=>["",v]):c=="{"?$(G($),v=>["",v]):c=='"'?$(E($),v=>["",v]):c=='t'?$(K("rue")(true)($),v=>["",v]):c=='f'?$(K("alse")(false)($),v=>["",v]):C(c)($))
I=p=>{var $=(a,b)=>a==R?c=>b(c):Z(a)?c=>$(a(c),b):b(a);return p($)}
J=p=>j=>{var s=I(p),f=k=>{for(var i=0;k[i];++i){try{s=s(k[i])}catch(e){s=I(p),k=""}!Z(s)&&(j(s[1]),s=I(p))}return f};return f}
K=s=>r=>$=>!s?r:$(R,c=>c!==s[0]?T():K(s.slice(1))(r)($));
return J(H(""))
})()
