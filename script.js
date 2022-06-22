function mostrarConteudo(){

  let conteudo = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"
  
  // O nome das cidades avaliadas. 
  saoPaulo = conteudo.match(/\*(.*?)\*/g)[0].replaceAll("*",""); 
  lasVegas = conteudo.match(/\*(.*?)\*/g)[1].replaceAll("*","");
  moscou = conteudo.match(/\*(.*?)\*/g)[2].replaceAll("*","");
  alert(saoPaulo);  
  alert(lasVegas);  
  alert(moscou);  

  // O conteúdo do roteiro A de cada cidade avaliada.
  roteiroASaoPaulo = conteudo.match(/Roteiro A(.*?)\.*Roteiro B/g)[0].replaceAll("Roteiro A | ","").replaceAll("#Roteiro B","");
  roteiroALasVegas = conteudo.match(/Roteiro A(.*?)\.*Roteiro B/g)[1].replaceAll("Roteiro A | ","").replaceAll("#Roteiro B","");
  roteiroAMoscou = conteudo.match(/Roteiro A(.*?)\.*Roteiro B/g)[2].replaceAll("Roteiro A | ","").replaceAll("#Roteiro B","");
  alert(roteiroASaoPaulo);
  alert(roteiroALasVegas);
  alert(roteiroAMoscou);

  // Quantos locais são citados no roteiro A de cada cidade.
  quantidadeLocalSP = roteiroASaoPaulo.split("<br>")[1].split("; ").length;
  quantidadeLocalLA = roteiroALasVegas.split("<br>")[1].split("; ").length;
  quantidadeLocalM = roteiroAMoscou.split("<br>")[1].split("; ").length;
  alert("Quantidade de locais em São Paulo " + quantidadeLocalSP);
  alert("Quantidade de locais em Las Vegas " +quantidadeLocalLA);
  alert("Quantidade de locais em Moscou " + quantidadeLocalM);

  // Roteiro B  
  roteiroBSaoPaulo = conteudo.match(/Roteiro B(.*?)\.*Roteiro C/g)[0].replaceAll("Roteiro B | ","").replaceAll("#Roteiro C","");
  roteiroBLasVegas = conteudo.match(/Roteiro B(.*?)\.*Roteiro C/g)[1].replaceAll("Roteiro B | ","").replaceAll("#Roteiro C","");
  
  // O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
  pontoTuristicoCentroSP = roteiroBSaoPaulo.split("<br>")[1].split("; ");  
  alert(pontoTuristicoCentroSP);
  
  // O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
  pontoTuristicoDowntownLA = roteiroBLasVegas.split("<br>")[1].split("; ");
  alert(pontoTuristicoDowntownLA);

}