using appFalaComigo.Models;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Repository
{
    public class CartaoDb : ICartaoDb
    {
        readonly string connectionString;
        public CartaoDb()
        {
            connectionString = "Server=127.0.0.1;User ID=root;Password=vvv123;Database=fala_comigo";
        }

        public List<Cartao> GetBoardCards(int pranchaId)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "SELECT cartaoId ,pranchaId, arasaacId, nome FROM cartoes WHERE pranchaId = {0};";
            sql = String.Format(sql, pranchaId);

            var command = new MySqlCommand(sql, connection);
            var reader = command.ExecuteReader();

            List<Cartao> cartaos = new List<Cartao>();

            while (reader.Read())
            {
                cartaos.Add(new Cartao
                {
                    CartaoId = reader.GetInt32(0),
                    PranchaId = reader.GetInt32(1),
                    ArasaacId = reader.GetInt32(2),
                    Nome = reader.IsDBNull(3) ? String.Empty : reader.GetString(3)
                });
            }

            reader.Close();
            connection.Close();

            return cartaos;
        }

        public void CreateCard(Cartao cartao)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "INSERT INTO cartoes (pranchaId, arasaacId, nome) VALUES ({0}, {1}, '{2}');";
            sql = string.Format(sql, cartao.PranchaId, cartao.ArasaacId, cartao.Nome);

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void UpdateCard(Cartao cartao)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "UPDATE cartoes SET  arasaacId = {0}, nome = '{1}' WHERE cartaoId = {2};";
            sql = string.Format(sql, cartao.ArasaacId, cartao.Nome, cartao.CartaoId);

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void DeleteCard(int cardId)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "DELETE FROM cartoes WHERE cartaoId = {0};";
            sql = string.Format(sql, cardId);

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void Dispose()
        {
            this.Dispose();
        }
    }
}