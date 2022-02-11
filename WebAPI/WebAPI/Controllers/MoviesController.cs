using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;

namespace WebAPI.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public MoviesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                    select ID,Title,Plot,ThumbnailURL,VideoURL
                    from movie
                    where movie.ID = " + id+"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("APICon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet("{id}/cast")]

        public JsonResult Getcast(int id)
        {
            string query = @"
                    select FirstName,LastName,Biography,ThumbnailURL from cast where MovieID = " + id + "";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("APICon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet]
        public JsonResult Getmovie(String filter)
        {
            string query = @"
                    select movie.ID,movie.Title,movie.ThumbnailURL
                    from movie 
                    INNER JOIN cast on movie.ID = cast.MovieID
                    where movie.Title like '%" + filter + "%' or concat(concat(cast.FirstName,' '), cast.LastName)  like '%" + filter + "%'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("APICon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }



    }
}
