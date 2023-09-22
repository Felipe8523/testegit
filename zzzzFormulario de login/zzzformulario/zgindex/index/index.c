typedef struct {
    int Dia,mes,ano; // INT tipo inteiro
} Data;
typedef struct pessoa{
    char Nome[100];
    int Idade;
    float Salario;
    Data nasc;
} pessoa; 
void mostrar (struct pessoa x){
    printf("nome : %s/n",x.Nome);
    printf("Idade : %d/n",x.Idade);
    printf("Salario : %.2f/n",x.Salario);
    printf("Dt.nasc : %d%d%d/n",x.nasc);
}
main(){
    setlocale("Portuguese");
    struct pessoa p = {"lepras", 23,12345.67,{23,2,2003}};
    mostrar(p);
}