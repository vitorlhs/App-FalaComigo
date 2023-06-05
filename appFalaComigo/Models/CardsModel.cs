using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Models
{
    public class CardsModel
    {
        public CardsModel()
        {
            Cards = new List<Card>();
        }
        public List<Card> Cards { get; set; }
        public int PranchaId { get; set; }
    }

    public class Card {
        public Cartao CardModel { get; set; }
        public string ImageUrl { get; set; }
    }
}