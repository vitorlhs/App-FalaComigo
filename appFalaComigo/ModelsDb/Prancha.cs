using appFalaComigo.ModelsApi;
using static appFalaComigo.Util.CorEnum;

namespace appFalaComigo.Models
{
    public class Prancha
    {
        public int PranchaId { get; set; }
        public int UsuarioId { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int ArasaacIdImagem { get; set; }
        public Cor Cor { get; set; }
        public Pictogram BoardPictogram { get; set; }
    }
}