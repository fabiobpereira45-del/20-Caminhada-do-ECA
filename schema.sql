-- ============================================================
-- 20ª CAMINHADA DO ECA 2026 — SALVADOR/BA
-- Esquema de Banco de Dados Supabase (PostgreSQL)
-- ============================================================

-- 1. Tabela de Avaliações dos Conselheiros
CREATE TABLE IF NOT EXISTS avaliacoes_conselheiros (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    conselho TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    categoria TEXT NOT NULL,
    comentario TEXT NOT NULL,
    sugestao TEXT,
    initials TEXT,
    accent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabela de Comentários / Respostas aos Conselheiros
CREATE TABLE IF NOT EXISTS comentarios_conselheiros (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    avaliacao_id TEXT NOT NULL REFERENCES avaliacoes_conselheiros(id) ON DELETE CASCADE,
    nome TEXT NOT NULL,
    conselho TEXT NOT NULL,
    initials TEXT,
    texto TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Habilitar RLS (Row Level Security)
ALTER TABLE avaliacoes_conselheiros ENABLE ROW LEVEL SECURITY;
ALTER TABLE comentarios_conselheiros ENABLE ROW LEVEL SECURITY;

-- 4. Criar políticas de acesso público (Leitura e Inserção)
DROP POLICY IF EXISTS "Permitir leitura publica em avaliacoes" ON avaliacoes_conselheiros;
CREATE POLICY "Permitir leitura publica em avaliacoes" ON avaliacoes_conselheiros FOR SELECT USING (true);

DROP POLICY IF EXISTS "Permitir insercao publica em avaliacoes" ON avaliacoes_conselheiros;
CREATE POLICY "Permitir insercao publica em avaliacoes" ON avaliacoes_conselheiros FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir leitura publica em comentarios" ON comentarios_conselheiros;
CREATE POLICY "Permitir leitura publica em comentarios" ON comentarios_conselheiros FOR SELECT USING (true);

DROP POLICY IF EXISTS "Permitir insercao publica em comentarios" ON comentarios_conselheiros;
CREATE POLICY "Permitir insercao publica em comentarios" ON comentarios_conselheiros FOR INSERT WITH CHECK (true);
