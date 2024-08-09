---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Object Pool'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Object Pool
author: JoaoAugustoMPdJ, SalvadorCerqueiraJr
---

# Object Pool

## João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004)
[@JoaoAugustoMPdJ](https://github.com/JoaoAugustoMPdJ)

<!-- @include: ../../../includes/seminario-1-JoaoAugustoMPdJ/README.md -->


## Salvador Cerqueira Júnior (20212TADSSAJ0020)
[@SalvadorCerqueiraJr](https://github.com/SalvadorCerqueiraJr)

<!-- @include: ../../../includes/seminario-1-SalvadorCerqueiraJr/README.md -->

## Yuri Pêpe

<figure>
  

```mermaid
classDiagram
    class Impressora {
        - emUso: boolean
        + conectar() void
        + desconectar() void
        + estaEmUso() boolean
    }

    class ObjectPool {
        - pool: List<Impressora>
        - tamanhoMaximo: int
        + pegarImpressora() Impressora
        + devolverImpressora(impressora: Impressora) void
    }

    class Cliente {
        + main(args: String[]) void
    }

    ObjectPool o-- Impressora : "gerencia"
    Cliente o-- ObjectPool : "usa"
```
</figure>
