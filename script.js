const drinks = [
['Moscow Mule','Vodka, limão, gengibre e espuma de gengibre.','classic',true],
['London Mule','Gin, limão, gengibre e espuma de gengibre.','classic'],
['Fitzgerald','Gin, limão siciliano, xarope de açúcar e bitter.','classic'],
['Expresso Marula','Café expresso, vodka, licor de marula e leite condensado.','signature'],
['Mojito','Rum branco, limão, água com gás e hortelã.','classic',true],
['Mojito de Morango','Rum branco, morango, limão, água com gás e hortelã.','classic',true],
['Piña Colada','Rum branco, leite de coco, abacaxi e leite condensado.','classic',true],
['Coconut','Vodka ou cachaça, creme de leite, leite de coco, leite condensado e coco em flocos.','signature'],
['Passion Ginger Sour','Gin, limão siciliano, maracujá, laranja e espuma de gengibre.','signature'],
['Limoncello Spritz','Espumante, água com gás e licor de limão siciliano.','classic'],
['Vodka com Energético','Vodka e energético natural, tropical ou melancia.','signature'],
['Xeque Mate','Rum branco, limão, chá mate e guaraná.','signature'],
['Jorge Amado','Cachaça, maracujá, cravo, canela e xarope de açúcar.','signature'],
['Caipirinha','Cachaça, limão, morango ou maracujá e xarope de açúcar.','classic'],
['Caipirinha Cremosa','Cachaça, limão, morango ou maracujá e leite condensado.','signature'],
['Caipivodka','Vodka, limão, morango ou maracujá e xarope de açúcar.','classic'],
['Caipivodka Cremosa','Vodka, limão, morango ou maracujá e leite condensado.','signature'],
['Caipifruta','Refrigerante, limão, morango ou maracujá e leite condensado.','signature',true,true],
['Aperol Gin Sour','Gin, Aperol, limão, xarope de açúcar e albumina.','signature'],
['Aperol Sour','Vodka, Aperol e limão.','signature'],
['Aperol Spritz','Aperol, espumante seco e água com gás.','classic'],
['Gin Tônica','Gin, tônica e limão ou laranja.','classic'],
['Gin com Energético','Gin e energético natural, tropical ou melancia.','signature'],
['Negroni','Gin, Campari e vermute rosso.','classic'],
['Campari Sour','Campari, limão e albumina.','classic'],
['Garibaldi','Campari e laranja.','classic'],
['Whisky Sour','Whisky, laranja, limão e albumina.','classic'],
['Shot Vianelli','Vodka ou cachaça e licor de morango ou limão siciliano.','signature']
];
let filter='all';
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(){
 const query=normalize(document.querySelector('#search').value);
 const selected=drinks.filter(d=>(filter==='all'||(filter==='zero'?d[3]:d[2]===filter))&&normalize(d[0]+' '+d[1]).includes(query));
 const container=document.querySelector('#drinks');container.replaceChildren();
 selected.forEach(d=>{const card=document.createElement('article');card.className='drink';const title=document.createElement('h3');title.textContent=d[0];const desc=document.createElement('p');desc.textContent=d[1];card.append(title,desc);if(d[3]){const badge=document.createElement('span');badge.className='zero-badge';badge.textContent=d[4]?'Sem álcool':'Também disponível sem álcool';card.append(badge);}container.append(card);});
 document.querySelector('#result-count').textContent=`${selected.length} ${selected.length===1?'drink encontrado':'drinks para explorar'}`;
 document.querySelector('#empty').hidden=selected.length>0;
 document.querySelector('.featured').hidden=filter!=='all'||query!=='';
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();}));
document.querySelector('#search').addEventListener('input',render);render();
