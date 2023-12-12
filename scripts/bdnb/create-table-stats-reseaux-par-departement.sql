
create table stats_reseaux_par_departement (code_departement varchar not null, nb_reseaux int not null, taux_enrr float);

create unique index stats_reseaux_par_departement_code_departement_idx on stats_reseaux_par_departement(code_departement);

-- issu du fichier nb_reseaux_departement.ods envoyé par Florence (données open data du SDES)
INSERT INTO stats_reseaux_par_departement(code_departement, nb_reseaux, taux_enrr) VALUES
('01', 9, 74.50),
('02', 3, 78.29),
('03', 10, 77.43),
('04', 5, 77.45),
('05', 7, 94.80),
('06', 6, 89.48),
('07', 7, 97.02),
('08', 14, 69.49),
('09', 0, null),
('10', 3, 36.23),
('11', 3, 61.06),
('12', 5, 86.68),
('13', 13, 50.58),
('14', 10, 90.00),
('15', 9, 92.07),
('16', 10, 34.35),
('17', 7, 84.62),
('18', 2, 91.07),
('19', 8, 95.45),
('2B', 1, 99.85),
('21', 5, 74.60),
('22', 15, 92.41),
('23', 4, 94.86),
('24', 6, 82.05),
('25', 16, 86.34),
('26', 5, 57.28),
('27', 8, 82.73),
('28', 4, 81.90),
('29', 7, 92.27),
('30', 3, 59.03),
('31', 11, 84.98),
('32', 0, null),
('33', 21, 67.21),
('34', 10, 44.51),
('35', 11, 51.09),
('36', 6, 77.64),
('37', 10, 69.14),
('38', 19, 83.91),
('39', 7, 69.36),
('40', 4, 93.12),
('41', 6, 86.71),
('42', 48, 60.73),
('43', 10, 95.94),
('44', 9, 71.90),
('45', 5, 74.14),
('46', 15, 95.09),
('47', 1, 100.00),
('48', 2, 99.78),
('49', 14, 72.13),
('50', 6, 84.52),
('51', 7, 56.09),
('52', 8, 89.59),
('53', 4, 96.41),
('54', 11, 79.79),
('55', 5, 70.66),
('56', 7, 80.21),
('57', 19, 67.38),
('58', 27, 73.41),
('59', 20, 70.61),
('60', 8, 55.04),
('61', 6, 87.74),
('62', 13, 75.02),
('63', 13, 67.82),
('64', 3, 82.98),
('65', 1, 75.24),
('66', 2, 98.35),
('67', 31, 67.70),
('68', 18, 75.55),
('69', 28, 64.87),
('70', 10, 76.58),
('71', 8, 63.94),
('72', 5, 75.67),
('73', 16, 74.19),
('74', 22, 72.69),
('75', 3, 48.79),
('76', 19, 81.00),
('77', 20, 74.47),
('78', 15, 47.83),
('79', 4, 29.08),
('80', 4, 61.86),
('81', 8, 68.66),
('82', 3, 91.17),
('83', 5, 89.75),
('84', 3, 79.65),
('85', 3, 41.10),
('86', 7, 56.52),
('87', 6, 78.32),
('88', 17, 81.08),
('89', 3, 84.42),
('90', 1, 26.02),
('91', 18, 67.18),
('92', 21, 44.31),
('93', 21, 56.23),
('94', 22, 75.59),
('95', 15, 50.52);
