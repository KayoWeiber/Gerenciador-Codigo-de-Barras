// db.ts

export type Produto = {
    codigo: string;
    descricao: string;
  };
  
  type BancoDeDados = {
    [codigo: string]: Produto;
  };
  
  // Carrega do localStorage ou inicia vazio
  function carregarDB(): BancoDeDados {
    const data = localStorage.getItem("produtos");
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return {};
      }
    }
    return {};
  }
  
  function salvarDB(db: BancoDeDados) {
    localStorage.setItem("produtos", JSON.stringify(db));
  }
  
  let db: BancoDeDados = carregarDB();
  
  /**
   * Adiciona um produto ao banco.
   * Se o código já existir, sobrescreve.
   */
  export function adicionarProduto(produto: Produto) {
    db[produto.codigo] = produto;
    salvarDB(db);
  }
  
  /**
   * Busca um produto pelo código.
   * Retorna undefined se não encontrar.
   */
  export function buscarProduto(codigo: string): Produto | undefined {
    // Sempre lê do localStorage para garantir dados atualizados
    db = carregarDB();
    return db[codigo];
  }
  
  /**
   * Atualiza um produto existente.
   * Se não existir, não faz nada.
   */
  export function atualizarProduto(produto: Produto) {
    if (db[produto.codigo]) {
      db[produto.codigo] = produto;
      salvarDB(db);
    }
  }
  
  /**
   * Remove um produto pelo código.
   */
  export function removerProduto(codigo: string) {
    delete db[codigo];
    salvarDB(db);
  }
  
  /**
   * Retorna todos os produtos cadastrados.
   */
  export function listarProdutos(): Produto[] {
    db = carregarDB();
    return Object.values(db);
  }
  