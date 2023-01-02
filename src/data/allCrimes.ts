import { Crime } from '../interfaces/crime';

export const allCrimes: Crime[] = [
    {
        crime: 'ABUSO DE AUTORIDADE',
        type: 'INFRAÇÕES/CRIMES MENORES',
        months: 20,
        trafficTicket: 50000,
        haveBail: true,
        fianca: 100000
    },
    {
        crime: 'ALTA VELOCIDADE',
        type: 'TRANSITO',
        months: 0,
        trafficTicket: 10000,
        haveBail: true,
        fianca: 0
    },
    {
        crime: 'ASSOCIAÇÃO AO TRAFICO',
        type: 'NARCOTRAFICO',
        months: 40,
        trafficTicket: 100000,
        haveBail: true,
        fianca: 200000
    },
    {
        crime: 'ATRAPALHAR RECRUTAMENTO',
        type: 'ORDEM PUBLICA',
        months: 100,
        trafficTicket: 100000,
        haveBail: false,
        fianca: 200000
    },
	{
		crime: 'CONDUÇÃO INPRUDENTE',
		type: 'TRANSITO',
		months: 0,
		trafficTicket: 10000,
		haveBail: false,
        fianca: 0
	},
	{
		crime:'CORRIDAS ILEGAIS',
		type: 'TRANSITO',
		months: 60,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 400000
	},
    {
        crime: 'DINHEIRO SUJO (+10K)',
        type: 'ILEGAL',
        months: 10,
        trafficTicket: 25000,
        haveBail: false,
        fianca: 50000
    },
	{
        crime: 'DINHEIRO SUJO COM AGRAVO (+499K)',
        type: 'ILEGAL',
        months: 60,
        trafficTicket: 200000,
        haveBail: false,
        fianca: 1000000
    },
    {
        crime: 'DIRIGIR NA CONTRA MÃO',
        type: 'TRANSITO',
        months: 0,
        trafficTicket: 10000,
        haveBail: false,
        fianca: 0
    },
    {
        crime: 'EXTORSAO',
        type: 'ROUBOS E EXTORÇÃO',
        months: 40,
        trafficTicket: 50000,
        haveBail: false,
        fianca: 100000
    },
    {
        crime: 'FALSA COMUNICAÇÃO DE CRIME',
        type: 'INFRAÇÕES/CRIMES MENORES',
        months: 20,
        trafficTicket: 50000,
        haveBail: false,
        fianca: 100000
    },
    {
        crime: 'FALSIDADE IDEOLOGICA',
        type: 'ALEATORIOS/OUTROS',
        months: 30,
        trafficTicket: 200000,
        haveBail: false,
        fianca: 400000
    },
    {
        crime: 'FORMAÇÃO DE QUADRILHA (+4)',
        type: 'ALEATORIOS/OUTROS',
        months: 50,
        trafficTicket: 100000,
        haveBail: false,
        fianca: 200000
    },
    {
        crime: 'FUGA' ,
        type: 'INFRAÇÕES/CRIMES MENORES',
        months: 40,
        trafficTicket: 40000,
        haveBail: false,
        fianca: 100000
    },
    {
        crime: 'FURTO' ,
        type: 'CONTRA O PATRIMONIO',
        months: 30,
        trafficTicket: 50000,
        haveBail: false,
        fianca: 150000
    },
	{
		crime: 'LESAO CORPORAL',
		type: 'VIOLENTOS',
		months: 40,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
	{
		crime: 'OBSTRUÇÃO DE JUSTIÇA',
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 20,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
	{
		crime: 'OCULTAÇÃO FACIAL' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 10,
		trafficTicket: 10000,
		haveBail: false,
        fianca: 20000
	},
	{
		crime: 'OMISSAO DE SOCORRO',
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 10,
		trafficTicket: 10000,
		haveBail: false,
        fianca: 20000
	},
    {
		crime: 'PERTURBAÇÃO DA ORDEM' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 10,
		trafficTicket: 10000,
		haveBail: false,
        fianca: 20000
	},
    {
		crime: 'POLUIÇÃO SONORA' ,
		type: 'TRANSITO',
		months: 10,
		trafficTicket: 10000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'PORTE DE ARMA LEVE' ,
		type: 'ARMAS E ITENS ILEGAIS',
		months: 30,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 200000
	},
    {
		crime: 'PORTE DE ARMA PESADA (INAFIANÇAVEL)' ,
		type: 'ARMAS E ITENS ILEGAIS',
		months: 50,
		trafficTicket: 200000,
		haveBail: false,
        fianca: 400000
	},
    {
		crime: 'POSSE DE CAPSULA' ,
		type: 'ARMAS E ITENS ILEGAIS',
		months: 10,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 10000
	},
    {
		crime: 'POSSE DE COMPONENTES NARCÓTICOS' ,
		type: 'NARCOTRAFICO',
		months: 20,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'POSSE DE DROGAS (+5)' ,
		type: 'ILEGAL',
		months: 30,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 500000
	},
    {
		crime: 'POSSE DE ITENS ILEGAIS' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 20,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'POSSE DE PEÇAS DE ARMA' ,
		type: 'ARMAS E ITENS ILEGAIS',
		months: 10,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'QRR ILEGAL' ,
		type: 'ORDEM PUBLICA',
		months: 20,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
	{
		crime: 'CORRUPÇÃO PASSIVEL (INAFIANÇAVEL)' ,
		type: 'ORDEM PUBLICA',
		months: 300,
		trafficTicket: 500000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'RECEPTAÇÃO DE VEICULOS' ,
		type: 'ILEGAL',
		months: 30,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'ROUBO' ,
		type: 'ROUBOS E EXTORÇÃO',
		months: 60,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 200000
	},
    {
		crime: 'ROUBO DE CAIXA' ,
		type: 'ROUBOS E EXTORÇÃO',
		months: 60,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'SUBORNO (INAFIANÇAVEL)' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 60,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'TRAFICO DE ARMAS' ,
		type: 'ILEGAL',
		months: 70,
		trafficTicket: 200000,
		haveBail: false,
        fianca: 1500000
	},
    {
		crime: 'TRAFICO DE DROGAS(+30)' ,
		type: 'NARCOTRAFICO',
		months: 60,
		trafficTicket: 200000,
		haveBail: false,
        fianca: 1500000
	},
    {
		crime: 'TRAFICO DE INFLUÊNCIA' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 10,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'TRAFICO DE MUNIÇÃO (+50)' ,
		type: 'ILEGAL',
		months: 20,
		trafficTicket: 200000,
		haveBail: false,
        fianca: 350000
	},
    {
		crime: 'USO EXCESSIVO DE INSUFILM' ,
		type: 'TRANSITO',
		months: 0,
		trafficTicket: 10000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'USO INDEVIDO DE 190/02' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 20,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 100000
	},
    {
		crime: 'VANDALISMO' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 20,
		trafficTicket: 50000,
		haveBail: false,
        fianca: 200000
	},
    {
		crime: 'VANDALISMO DE PROPRIEDADE DO GOVERNO' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 20,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 1000000
	},
	{
		crime: 'OCULTAÇÃO DE PROVAS' ,
		type: 'INFRAÇÕES/CRIMES MENORES',
		months: 40,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 200000
	},
    {
		crime: 'VEICULO MUITO DANIFICADO' ,
		type: 'TRANSITO',
		months: 0,
		trafficTicket: 25000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'DESACATO (INAFIANÇAVEL)' ,
		type: 'ORDEM PUBLICA',
		months: 30,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'HOMICIDIO DOLOSO QUALIFICADO' ,
		type: 'CONTRA A VIDA',
		months: 100,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'HOMICIDIO FUNCIONARIO PUBLICO (INAFIANÇAVEL)' ,
		type: 'CONTRA A VIDA',
		months: 150,
		trafficTicket: 300000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'PRISAO MILITAR (INAFIANÇAVEL)' ,
		type: 'ORDEM PUBLICA',
		months: 100,
		trafficTicket: 0,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'PREVARICAÇÃO (INAFIANÇAVEL)' ,
		type: 'ORDEM PUBLICA',
		months: 100,
		trafficTicket: 0,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'SEQUESTRO (INAFIANÇAVEL)' ,
		type: 'VIOLENTOS',
		months: 50,
		trafficTicket: 200000,
		haveBail: false,
        fianca: 0
	},
    {
		crime: 'TENTATIVA DE OMICIDIO (INAFIANÇAVEL)',
		type: 'CONTRA A VIDA',
		months: 40,
		trafficTicket: 100000,
		haveBail: false,
        fianca: 0
	},

    
].sort((a, b) => (a.crime > b.crime) ? 1 : -1)
