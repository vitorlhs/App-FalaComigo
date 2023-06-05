using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using appFalaComigo.Models;
using MySqlConnector;

namespace appFalaComigo.Repository
{
    public class UsuarioDb : IUsuarioDb
    {
        readonly string connectionString;
        public UsuarioDb()
        {
            connectionString = "Server=127.0.0.1;User ID=root;Password=vvv123;Database=fala_comigo";
        }

        public List<Usuario> GetUsers()
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            var command = new MySqlCommand("SELECT usuarioId, nome, email FROM usuarios;", connection);
            var reader = command.ExecuteReader();

            List<Usuario> usuarios = new List<Usuario>();

            while (reader.Read())
            {
                usuarios.Add(new Usuario
                {
                    UsuarioId = reader.GetInt32(0),
                    Nome = reader.IsDBNull(1) ? String.Empty : reader.GetString(1),
                    Email = reader.IsDBNull(2) ? String.Empty : reader.GetString(2)
                });
            }

            reader.Close();
            connection.Close();

            return usuarios;
        }

        public void CreateUser(Usuario usuario)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "INSERT INTO usuarios (nome, email) VALUES ({0}, {1});";
            sql = string.Format(sql, usuario.Nome, usuario.Email);

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void UpdateUser(Usuario usuario)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "UPDATE usuarios SET nome = {0}, email = {1} WHERE usuarioId = {2};";
            sql = string.Format(sql, usuario.Nome, usuario.Email, usuario.UsuarioId);

            var command = new MySqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public void DeleteUser(Usuario usuario)
        {
            var connection = new MySqlConnection(connectionString);
            connection.Open();

            string sql = "DELETE FROM usuarios WHERE usuarioId = {0};";
            sql = string.Format(sql, usuario.UsuarioId);

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