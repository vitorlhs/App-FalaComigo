using appFalaComigo.Models;
using appFalaComigo.Util;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Repository
{
    public class PranchaDb : IPranchaDb
    {
        readonly string connectionString;
        public PranchaDb()
        {
            connectionString = "Server=127.0.0.1;User ID=root;Password=vvv123;Database=fala_comigo";
        }

        public List<Prancha> GetUserBoards(int usuarioId)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "SELECT pranchaId, usuarioId, nome, descricao, arasaacIdImagem, cor FROM pranchas WHERE usuarioId = {0};";
            sql = String.Format(sql, usuarioId);

            var command = new MySqlCommand(sql, connection);
            var reader = command.ExecuteReader();

            List<Prancha> pranchas = new List<Prancha>();

            while (reader.Read())
            {
                pranchas.Add(new Prancha
                {
                    PranchaId = reader.GetInt32(0),
                    UsuarioId = reader.GetInt32(1),
                    Nome = reader.IsDBNull(2) ? String.Empty : reader.GetString(2),
                    Descricao = reader.IsDBNull(3) ? String.Empty : reader.GetString(3),
                    ArasaacIdImagem = reader.GetInt32(4),
                    Cor = CorEnum.GetCorType(reader.IsDBNull(5) ? String.Empty : reader.GetString(5))
                });
            }

            reader.Close();
            connection.Close();

            return pranchas;
        }

        public void CreateBoard(Prancha prancha)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "INSERT INTO pranchas (usuarioId, nome, descricao, arasaacIdImagem, cor) VALUES ({0}, '{1}', '{2}', {3}, '{4}')";
            sql = string.Format(sql, prancha.UsuarioId, prancha.Nome, prancha.Descricao, prancha.ArasaacIdImagem, CorEnum.GetCorString(prancha.Cor));

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void UpdateBoard(Prancha prancha)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "UPDATE pranchas SET nome = '{0}', descricao = '{1}', arasaacIdImagem = {2}, cor = '{3}' WHERE pranchaId = {4};";
            sql = string.Format(sql, prancha.Nome, prancha.Descricao, prancha.ArasaacIdImagem, CorEnum.GetCorString(prancha.Cor), prancha.PranchaId);

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void DeleteBoard(int boardId)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "DELETE FROM cartoes WHERE pranchaId = {0};";
            sql = string.Format(sql, boardId);

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            sql = "DELETE FROM pranchas WHERE pranchaId = {0};";
            sql = string.Format(sql, boardId);

            command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void Dispose()
        {
            this.Dispose();
        }
    }
}