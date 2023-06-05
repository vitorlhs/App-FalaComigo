using appFalaComigo.Models;
using System;
using System.Collections.Generic;

namespace appFalaComigo.Repository
{
    public interface ICartaoDb : IDisposable
    {
        List<Cartao> GetBoardCards(int pranchaId);
        void CreateCard(Cartao cartao);
        void UpdateCard(Cartao cartao);
        void DeleteCard(int cardId);
    }
}