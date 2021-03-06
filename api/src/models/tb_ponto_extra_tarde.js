import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_ponto_extra_tarde extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_ponto_extra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_turma: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_aluno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_chamada: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_ponto_extra_tarde',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ponto_extra" },
        ]
      },
    ]
  });
  }
}
